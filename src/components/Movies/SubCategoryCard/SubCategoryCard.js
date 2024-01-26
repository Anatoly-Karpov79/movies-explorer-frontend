import React from 'react';
import { useState } from "react";

import delet from '../../../images/delete.svg'

import './SubCategoryCard.css';
//import { useLocation } from 'react-router-dom';


function SubCategoryCard({ subCategory, savedSubCategories, onSubCategoryClick, onLikeMovie, onDeleteMovie }) {
    const savedSubCategory = savedSubCategories
    ? savedSubCategories.find((item) => item.subCategoryId === subCategory.id)
    : '';

    function handleClick() {
        onSubCategoryClick(subCategory);
    }
     
    return (
        <div className="moviescard" key={subCategory.id} onClick={handleClick}>
            <h2 className="moviescard__name">{subCategory.name}</h2>

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

export default SubCategoryCard;
