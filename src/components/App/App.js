import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from "../NotFound/NotFound";
import Landing from "../Landing/Landing";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />;
        <Route exact path="/movies" element={<Movies />} />;
        <Route exact path="/savedmovies" element={<SavedMovies />} />;
        <Route exact path="/profile" element={<Profile />} />;
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/signup" element={<Register />} />;
        <Route path="*" element={<NotFound />} />

      </Routes>




    </div>
  );
}

export default App;
