import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/movies';
import About from '../About/About';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Начало дипломного проекта.
        </p>

      </header>
      <Routes>
          <Route path="/" element={<About />} />;
          <Route path="/movies" element={<Movies/>} />;
          <Route path="/saved-movies" element={<SavedMovies/>} />;
          <Route path="/profile" element={<Profile/>} />;
          <Route path="/sign-in" element={<Login/>} />
          <Route path="/sign-up" element={<Register/>} />;
      </Routes>
    </div>
  );
}

export default App;
