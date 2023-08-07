import React from 'react';
import movie from '../../../images/movie.png';
import saved from '../../../images/saved.svg';
import delet from '../../../images/delete.svg'

import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({movie}) {
    const location = useLocation();
    const hours = Math.floor(movie.duration / 60);
    const minutes = movie.duration % 60;

    return (
        <div className="moviescard" key={movie.id}>
            <h2 className="moviescard__name">{movie.nameRU}</h2>
            {location.pathname === '/savedmovies' &&
                <button type="button" aria-label="удалить фильм" className="moviescard__button" >
                    <img className="moviescard__saved" alt='удалить' src={delet} />
                </button>}
            {location.pathname === '/movies' &&
                <button type="button" aria-label="добавить в избранное" className="moviescard__button" >
                    <img className="moviescard__saved" alt='Сохранено' src={saved} />
                </button>}
            <p className="moviescard__duration">{movie.duration > 60 ? `${hours}ч ${minutes}м` : `${movie.duration}м`}</p>
            <a href={movie.trailerLink}  className="moviescard__image" target="_blank" rel="noopener noreferrer">
            <img className="moviescard__image" src={location.pathname === '/movies'
            ? `https://api.nomoreparties.co/${movie.image.url}`
            : movie.image} alt={movie.image.name} />
            </a>
        </div>
    );
}

export default MoviesCard;