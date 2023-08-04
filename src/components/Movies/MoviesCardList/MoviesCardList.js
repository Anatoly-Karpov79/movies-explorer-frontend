import React from "react";
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList (moviescard) {

    return (
        <section className="moviescardlist">
             <div className="moviescontent">
                  <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
                </div>  
          
            <button className="moviescardlist__button">Ещё</button>
        
      </section>
    );
}

export default MoviesCardList;