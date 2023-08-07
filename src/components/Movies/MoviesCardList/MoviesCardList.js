import React from "react";
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, savedMovies, onLikeMovie }) {

    return (
        <section className="moviescardlist">
            <div className="moviescontent">
                {movies.map((movie) => {
                    return (
                        <MoviesCard
                            key={movie.id}
                            movie={movie}
                            onLikeMovie={onLikeMovie}
                            savedMovies={savedMovies}
                        /* onLikeMovie={onLikeMovie}
                         onDeleteMovie={onDeleteMovie}*/
                        />
                    );

                })}

            </div>

            <button className="moviescardlist__button">Ещё</button>

        </section>
    );
}

export default MoviesCardList;