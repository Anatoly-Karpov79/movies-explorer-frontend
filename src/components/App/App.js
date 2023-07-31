import React, { useState } from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from "../Movies/Movies";
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from "../NotFound/NotFound";
import Landing from "../Landing/Landing";
import Menu from "../Main/Menu/Menu";


function App() {

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleClose() {
    setMenuIsOpen(false);
    console.log("Нажали")
  }
  function handleMenu() {
    console.log("Нажали меню")
    setMenuIsOpen(true);

  }

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />;
        <Route exact path="/movies" element={<Movies setActive={handleMenu} />} />;
        <Route exact path="/savedmovies" element={<SavedMovies setActive={handleMenu} />} />;
        <Route exact path="/profile" element={<Profile />} />;
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />;
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Menu active={menuIsOpen} setActive={handleMenu} onClose={handleClose} />





    </div>
  );
}

export default App;
