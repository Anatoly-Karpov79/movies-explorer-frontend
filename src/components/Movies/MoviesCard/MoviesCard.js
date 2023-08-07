import React from 'react';
import movie from '../../../images/movie.png';
import saved from '../../../images/saved.svg';
import delet from '../../../images/delete.svg'

import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({movie}) {
    const location = useLocation();

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
            <p className="moviescard__duration">2333</p>
            <img className="moviescard__image" src={movie} alt="33 слова о дизайне" />
        </div>
    );
}

export default MoviesCard;