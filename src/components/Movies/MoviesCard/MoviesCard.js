import React from 'react';

import delet from '../../../images/delete.svg'

import './MoviesCard.css';
//import { useLocation } from 'react-router-dom';

function CategoryCard({ category, savedCategories, onLikeMovie, onDeleteMovie }) {
 //   const location = useLocation();
    // const hours = Math.floor(movie.duration / 60);
    // const minutes = movie.duration % 60;
   
    const savedCategory = savedCategories
    ? savedCategories.find((item) => item.categoryId === category.id)
    : '';

    // const isLiked = savedMovies
    // ? savedMovies.some((i) => i.movieId === movie.id)
    // : false; 

   
      
     
    return (
      
        <div className="moviescard" key={category.id}>
            <h2 className="moviescard__name">{category.name}</h2>

            {/* {location.pathname === '/savedmovies' &&
                <button type="button" onClick={() => onDeleteMovie(movie._id)} aria-label="удалить фильм" className="moviescard__button" >
                    <img className="moviescard__saved" alt='удалить' src={delet} />
                </button>} */}
                
            {/* {location.pathname === '/movies' &&
                <button type="button"
                onClick={() => onLikeMovie(movie, isLiked, savedMovie?._id)}
                    aria-label="добавить в избранное"
                    className={`moviescard__button ${
                        isLiked ? 'moviescard__button_liked' : ''
                      }`} >
                        
                </button>} */}
            {/* <p className="moviescard__duration">{movie.duration > 60 ? `${hours}ч ${minutes}м` : `${movie.duration}м`}</p>
            <a href={movie.trailerLink}  className="moviescard__image" target="_blank" rel="noopener noreferrer">
            <img className="moviescard__image-picture" src={location.pathname === '/movies'
            ? `https://api.nomoreparties.co/${movie.image.url}`
            : movie.image} alt={movie.image.name} />
            </a> */}
        </div >
);
}

export default CategoryCard;