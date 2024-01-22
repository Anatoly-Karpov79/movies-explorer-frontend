import React from "react";
import './SubCategoriesList.css'
import SubCategoryCard from "../SubCategoryCard/SubCategoryCard";
import { useState, useEffect } from "react";

function SubCategoriesList({ subCategories, savedSubCategories, onCategoryClick, onLikeMovie, onDeleteMovie }) {
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
      }, [subCategories]);

      window.onresize = (event) => {
        setTimeout(checkWindowWidth, 10);
      };

      useEffect(() => {
        if (subCategories.length <= moviesToPage) {
            setButtonHiden(true)

            } else {
                setButtonHiden(false) };
        }, [subCategories, moviesToPage]);
    
        const handleClickButton = () => {
            setMoviesToPage(moviesToPage + moviesAdd);
          };
          
    return (
        <section className="moviescardlist">
            <div className="moviescontent">
                {subCategories.slice(0, moviesToPage).map((subCategory) => {
                    return (
                        <SubCategoryCard
                            key={subCategory.id || subCategory.subCategoryId}
                            subCategory={subCategory}
                            savedSubCategories={savedSubCategories}
                            onCategoryClick={onCategoryClick}
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

export default SubCategoriesList;