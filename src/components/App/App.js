import React, { useState, useEffect } from "react";
import './App.css';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
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


function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const [checkToken, setCheckToken] = useState(false);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem('savedMovies')) || []);
  
  function onUpdateUser(name, email) {
    mainApi
      .changeProfile(name, email)
    setCurrentUser({
      ...currentUser,
      name: name,
      email: email
    })
    console.log(name, email)

  };

  function handleClose() {
    setMenuIsOpen(false);
    console.log("Нажали")
  }
  function handleMenu() {
    console.log("Нажали меню")
    setMenuIsOpen(true);

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
        });
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

  const handleMoveis = (movies) => setMovies(movies);

 /* useEffect(() => {
    loggedIn &&
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
      console.log("Что-то добавили")
  }, [savedMovies, loggedIn]); */

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then((res) => {

        setTimeout(navigate, 3000, "/signin");
      })
      .catch((err) => {

      });
  }

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
    const savedMovies = JSON.parse(
      localStorage.getItem('savedMovies') );
        

    mainApi
      .deleteMovie(id)
      
      .then((res) => {
        const updatedSavedMovies = savedMovies.filter(
          (movie) => movie._id !== id        );
          console.log(res)
        setSavedMovies(updatedSavedMovies);
console.log(updatedSavedMovies)

        if (savedMovies) {
          const updatedSearchedSavedMovies = savedMovies.filter(
            (movie) => movie.id !== id
          );

          localStorage.setItem(
            'savedMovies',
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

      });
  }

  
  const handleChangeFilter = () => {
    const resultsearch = [];
    movies.filter((movie) => {
      if (movie.duration <= 40) {
        resultsearch.push(movie);
      }
    });

    setMovies(resultsearch);
  }
  

  const handleSearch = (inputValue) => {
    setIsLoading(true);
    const searchedMovies = JSON.parse(localStorage.getItem('searchedMovies'));
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));

    const resultsearch = [];
      
      movies.map((movie) => {
        let t = movie.nameRU.toLowerCase();
        if (t.indexOf(inputValue.toLowerCase()) > 0) {
          resultsearch.push(movie);
        }
    });


    setMovies(resultsearch)

   /* const filtered = searchFilter(savedMovies, query, isShort);

    
    setMovies(filtered); */
    setIsLoading(false);
  };


  function signOut() {
    localStorage.removeItem('userId');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('movies');
    navigate("/signup");
    setLoggedIn(false);
  }

  return (

    <div className="App">
     
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route exact path="/" element={<Landing />} />;

            <Route exact path="/movies"
              element={
                <ProtectedRoute loggedIn={loggedIn} checkToken={checkToken}>
                  <Movies
                    setActive={handleMenu}
                    movies={movies}
                    savedMovies={savedMovies}
                    onLikeMovie={handleLikeMovie}
                    handleSearch={handleSearch}
                    handleChangeFilter={handleChangeFilter}

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
                  />
                </ProtectedRoute>}
            />

            <Route exact path="/profile"
              element={
                <ProtectedRoute loggedIn={loggedIn} checkToken={checkToken}>
                  <Profile

                    signOut={signOut}
                    onUpdateUser={onUpdateUser} />
                </ProtectedRoute>}
            />
            <Route exact path="/profile" element={<Profile />} />;
            <Route exact path="/signin" element={<Login onLogin={handleLogin} />} />
            <Route exact path="/signup" element={<Register onRegister={handleRegister} />} />;
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Menu active={menuIsOpen} setActive={handleMenu} onClose={handleClose} />
        </CurrentUserContext.Provider >
      
    </div>


  );
}

export default App;
