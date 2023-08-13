import React from "react";
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from "react";

function MoviesCardList({ movies, savedMovies, onLikeMovie, onDeleteMovie }) {
    const [moviesToPage, setMoviesToPage] = useState(12);
  const [moviesAdd, setMoviesAdd] = useState(3);
  const [buttonHiden, setButtonHiden] = useState(true)

    const checkWindowWidth = () => {
        const screenWidth = window.screen.width;
    
        if (screenWidth >= 1000) {
            setMoviesToPage(12);
            setMoviesAdd(3);
        } else if (screenWidth < 1000 && screenWidth > 650) {
            setMoviesToPage(8);
            setMoviesAdd(2);
        } else {
            setMoviesToPage(5);
            setMoviesAdd(2);
        }
      };

      useEffect(() => {
        checkWindowWidth();
      }, [movies]);

      window.onresize = (event) => {
        setTimeout(checkWindowWidth, 10);
      };

      useEffect(() => {
        if (movies.length <= moviesToPage) {
            setButtonHiden(true)

            } else {
                setButtonHiden(false) };
        }, [movies, moviesToPage]);
    
        const handleClickButton = () => {
            setMoviesToPage(moviesToPage + moviesAdd);
          };

    return (
        <section className="moviescardlist">
            <div className="moviescontent">
                {movies.slice(0, moviesToPage).map((movie) => {
                    return (
                        <MoviesCard
                            key={movie.id || movie.movieId}
                            movie={movie}
                            onLikeMovie={onLikeMovie}
                            savedMovies={savedMovies}
                            onDeleteMovie={onDeleteMovie}
                        />
                    );
                })}
            </div>
            <button 
            className={`moviescardlist__button ${
              buttonHiden ? "moviescardlist__button_hidden" : ""
            }`}
            onClick={handleClickButton}
            >Ещё</button>
        </section>
    );
}

export default MoviesCardList;