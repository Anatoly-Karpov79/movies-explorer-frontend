import React from 'react';

import delet from '../../../images/delete.svg'

import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, savedMovies, onLikeMovie, onDeleteMovie }) {
    const location = useLocation();
    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;

    const savedMovie = savedMovies
    ? savedMovies.find((item) => item.movieId === movie.id)
    : '';

    const isLiked = savedMovies
    ? savedMovies.some((i) => i.movieId === movie.id)
    : false;

    const cardLikeButtonClassName = `moviescard__button ${
        isLiked && "moviescard__button_liked"
      }`;

    return (
        <div className="moviescard" key={movie.id}>
            <h2 className="moviescard__name">{movie.nameRU}</h2>

            {location.pathname === '/savedmovies' &&
                <button type="button" onClick={() => onDeleteMovie(movie._id)} aria-label="удалить фильм" className="moviescard__button" >
                    <img className="moviescard__saved" alt='удалить' src={delet} />
                </button>}
                
            {location.pathname === '/movies' &&
                <button type="button"
                onClick={() => onLikeMovie(movie, isLiked, savedMovie?.id)}
                    aria-label="добавить в избранное"
                    className={cardLikeButtonClassName} >
                        
                </button>}
            <p className="moviescard__duration">{movie.duration > 60 ? `${hours}ч ${minutes}м` : `${movie.duration}м`}</p>
            <a href={movie.trailerLink}  className="moviescard__image" target="_blank" rel="noopener noreferrer">
            <img className="moviescard__image-picture" src={location.pathname === '/movies'
            ? `https://api.nomoreparties.co/${movie.image.url}`
            : movie.image} alt={movie.image.name} />
            </a>
        </div >
    );
}

export default MoviesCard;