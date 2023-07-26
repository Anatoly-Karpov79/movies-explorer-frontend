import React, { useState } from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "../Header/Header";
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import About from '../About/About';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import Main from "../Main/Main";
import Footer from "../Footer/Footer";



function App() {


  return (
    <div className="App">
     
      
      <Routes>
          <Route exact path="/" element={ <About />} />;
          <Route exact path="/movies" element={<Movies/>} />;
          <Route exact path="/saved-movies" element={<SavedMovies/>} />;
          <Route exact path="/profile" element={<Profile/>} />;
          <Route exact path="/signin" element={<Login/>} />
          <Route exact path="/signup" element={<Register/>} />;
      </Routes>
      
      
            
      
    </div>
  );
}

export default App;
