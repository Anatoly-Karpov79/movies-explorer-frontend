import React, { useState, useEffect } from "react";
import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from "../Movies/Movies";
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from "../NotFound/NotFound";
import Landing from "../Landing/Landing";
import Menu from "../Main/Menu/Menu";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../context/CurrentUserContext'
import ProtectedRoute from "../ProtectedRoute";
import * as auth from "../../utils/auth";
import Preloader from "../Preloader/Preloader";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import error from '../../images/error.svg';
import success from '../../images/success.svg';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const [checkToken, setCheckToken] = useState(false);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [info, setInfo] = useState({ image: "", text: "" });

  function handleMenu() {
    setMenuIsOpen(true);
  }

  function handleClose() {
    setMenuIsOpen(false);
    setShowTooltip(false);
  }


  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
      mainApi
        .getSavedMovies()
        .then((data) => {
          setSavedMovies(data);
          localStorage.setItem('savedMovies', JSON.stringify(data));
        })
        .catch((error) => console.log(error));
    }
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('userId');
    if (jwt) {
      setCheckToken(true);
      console.log(jwt)
      auth
        .getContent(jwt)
        .then(() => {
          setLoggedIn(true);
          navigate(location.pathname);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }

  }, []);

  useEffect(() => {
    if (loggedIn) {
      if (localStorage.getItem('movies')) {
        setMovies(JSON.parse(localStorage.getItem('movies')));
      } else {
        moviesApi
          .getMovies()
          .then((movies) => {
            localStorage.setItem('movies', JSON.stringify(movies));
            setMovies(movies);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, [loggedIn]);

  useEffect(() => {
    loggedIn &&
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
  }, [savedMovies, loggedIn]);

  function chooseInfoTooltip(info) {
    setInfo({ image: info.image, text: info.text });
  }

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {
        setTimeout(setShowTooltip, 1000, true);
        chooseInfoTooltip({
          image: success,
          text: "Вы успешно зарегистрировались",
        });
        setLoggedIn(true);
        setCurrentUser(res);
        localStorage.setItem('userId', res._id);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        setTimeout(setShowTooltip, 1000, true);
        console.log(err)
        chooseInfoTooltip({
          image: error,
          text: "Что-то пошло не так! Попробуйте еще раз!",
        });
      });
  }

  function onUpdateUser(name, email) {
    mainApi
      .changeProfile(name, email)
      .then(() => {
        setTimeout(setShowTooltip, 1000, true);
        chooseInfoTooltip({
          image: success,
          text: "Профиль успешно обновлен",
        });
        setCurrentUser({
          ...currentUser,
          name: name,
          email: email
        })
      })
      .catch((err) => {
        setTimeout(setShowTooltip, 1000, true);
        console.log(err)
        chooseInfoTooltip({
          image: error,
          text: "Что-то пошло не так! Попробуйте еще раз!",
        });
      });
  };

  const handleLikeMovie = (movie, isLiked, id) => {
    if (isLiked) {
      handleDeleteMovie(id);

    } else {
      mainApi
        .saveMovie(movie)
        .then((res) => {
          setSavedMovies([...savedMovies, res]);
        })
        .catch((error) => console.log(error));
    }
  }

  const handleDeleteMovie = (id) => {
    const searchedSavedMovies = JSON.parse(
      localStorage.getItem('searchedSavedMovies'));
    mainApi
      .deleteMovie(id)
      .then((res) => {
        const updatedSavedMovies = savedMovies.filter(
          (movie) => movie._id !== id);
        setSavedMovies(updatedSavedMovies);

        if (searchedSavedMovies) {
          const updatedSearchedSavedMovies = searchedSavedMovies.filter(
            (movie) => movie.id !== id
          );
          localStorage.setItem('searchedSavedMovies',
            JSON.stringify(updatedSearchedSavedMovies)
          );
        }
      })
      .catch((error) => console.log(error));
  };

  function handleLogin(password, email) {
    auth
      .authorize(email, password)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        console.log(currentUser);
        localStorage.setItem('userId', res._id);
        navigate("/movies", { replace: true });

      })
      .catch((err) => {
        setShowTooltip(true);
        console.log(err)
        chooseInfoTooltip({
          image: error,
          text: "Что-то пошло не так! Попробуйте еще раз!",
        });
      });
  }

  function signOut() {
    localStorage.clear();
    navigate("/signup");
    setLoggedIn(false);
  }

  return (

    <div className="App">
      {isLoading ? (
        <Preloader />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>



          <Routes>
            <Route exact path="/" element={<Landing
              setActive={handleMenu}
              loggedIn={loggedIn}
            />} />;

            <Route exact path="/movies"
              element={
                <ProtectedRoute loggedIn={loggedIn} checkToken={checkToken}>
                  <Movies
                    setActive={handleMenu}
                    movies={movies}
                    savedMovies={savedMovies}
                    onLikeMovie={handleLikeMovie}
                    loggedIn={loggedIn}

                  />
                </ProtectedRoute>}
            />

            <Route exact path="/savedmovies"
              element={
                <ProtectedRoute loggedIn={loggedIn} checkToken={checkToken}>
                  <SavedMovies
                    setActive={handleMenu}
                    savedMovies={savedMovies}
                    onDeleteMovie={handleDeleteMovie}
                    loggedIn={loggedIn}
                  />
                </ProtectedRoute>}
            />

            <Route exact path="/profile"
              element={
                <ProtectedRoute loggedIn={loggedIn} checkToken={checkToken}>
                  <Profile
                    loggedIn={loggedIn}
                    signOut={signOut}
                    onUpdateUser={onUpdateUser}
                    setActive={handleMenu} />
                </ProtectedRoute>}
            />
            <Route exact path="/profile" element={<Profile />} />;
            <Route exact path="/signin" element={<Login onLogin={handleLogin} />} />
            <Route exact path="/signup" element={<Register onRegister={handleRegister} />} />;
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Menu active={menuIsOpen} setActive={handleMenu} onClose={handleClose} />
          <InfoTooltip isOpen={showTooltip} onClose={handleClose} info={info} />
        </CurrentUserContext.Provider >
      )}
    </div>


  );
}

export default App;
