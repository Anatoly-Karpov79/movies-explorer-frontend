import React, { useState, useEffect } from "react";
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from "../Movies/Movies";
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from "../NotFound/NotFound";
import Landing from "../Landing/Landing";
import Menu from "../Main/Menu/Menu";
import { api } from "../../utils/Api";
import { CurrentUserContext } from '../../context/CurrentUserContext'
import ProtectedRoute from "../ProtectedRoute";
import * as auth from "../../utils/auth";


function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();
  const [checkToken, setCheckToken] = useState(false);


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
      api
        .getUserInfo()
        .then((res) => {
          setCurrentUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });


    }
  }, [loggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem('userId');
    if (jwt) {
      setCheckToken(true);
      auth
        .getContent()
        .then((res) => {
          setLoggedIn(true);
          navigate("/movies", { replace: true });

        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [navigate]);

  function handleRegister(email, password) {
    auth
      .register(email, password)
      .then((res) => {


        setTimeout(navigate, 3000, "/signin");

      })
      .catch((err) => {

      });
  }

  function handleLogin(password, email) {
    auth
      .authorize(email, password)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        localStorage.setItem('userId', res._id);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {

      });
  }

  function onUpdateUser(data) {
    api
    .changeProfile(data)
    auth
    .getContent()
          .then(data => {
            setCurrentUser(data)
          })
      
      .catch((e) => { console.log(e) })

  };

  function signOut() {
    localStorage.removeItem('userId');
    navigate("/signup");
    setLoggedIn(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing />} />;

          <Route exact path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn} checkToken={checkToken}>
                <Movies setActive={handleMenu} />
              </ProtectedRoute>}
          />

          <Route exact path="/savedmovies"
            element={
              <ProtectedRoute loggedIn={loggedIn} checkToken={checkToken}>
                <SavedMovies setActive={handleMenu} />
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

      </div>
    </CurrentUserContext.Provider >
  );
}

export default App;
