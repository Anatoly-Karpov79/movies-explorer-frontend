import React from "react";
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from "react";

function CategoriesList({ categories, savedCategories, onLikeMovie, onDeleteMovie }) {
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
      }, [categories]);

      window.onresize = (event) => {
        setTimeout(checkWindowWidth, 10);
      };

      useEffect(() => {
        if (categories.length <= moviesToPage) {
            setButtonHiden(true)

            } else {
                setButtonHiden(false) };
        }, [categories, moviesToPage]);
    
        const handleClickButton = () => {
            setMoviesToPage(moviesToPage + moviesAdd);
          };
          console.log(categories)
    return (
        <section className="moviescardlist">
            <div className="moviescontent">
                {categories.slice(0, moviesToPage).map((category) => {
                    return (
                        <MoviesCard
                            key={category.id || category.categoryId}
                            category={category}
                            savedCategories={savedCategories}
                            
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

export default CategoriesList;