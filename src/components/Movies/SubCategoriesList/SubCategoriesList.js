import React from "react";
import './SubCategoriesList.css'
import SubCategoryCard from "../SubCategoryCard/SubCategoryCard";
import { subCategoriesApi } from "../../../utils/SubCategoriesApi";
import { useState, useEffect } from "react";

function SubCategoriesList({ loggedIn, category, categoryId, savedSubCategories, onCategoryClick  }) {
    const [moviesToPage, setMoviesToPage] = useState(12);
  const [moviesAdd, setMoviesAdd] = useState(3);
  const [buttonHiden, setButtonHiden] = useState(true)

  const [subCategories, setSubCategories] = useState([]);


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


          useEffect(() => {
            if (loggedIn) {
              if (localStorage.getItem('subCategories')) {
                console.log("Есть подкатегории ")
                setSubCategories(JSON.parse(localStorage.getItem('savedSubCategories')));
              } else {
                console.log("Нет подкатегории ", categoryId)
                subCategoriesApi
                  .getSubCategories(categoryId)
                  .then((subCategories) => {
                    localStorage.setItem('savedSubCategories', JSON.stringify(subCategories));
                    setSubCategories(subCategories);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }
            }
          }, [loggedIn]);

        
          
    return (
        <section className="moviescardlist">
            <h1>Это subCategoriesList {category} {categoryId}</h1>
            <div className="moviescontent">
                {subCategories.slice(0, moviesToPage).map((subCategory) => {
                    return (
                     <div>
                        
                        <SubCategoryCard
                        loggedIn={loggedIn}
                            key={subCategory.id || subCategory.subCategoryId}
                            subCategory={subCategory}
                            savedSubCategories={savedSubCategories}
                            onCategoryClick={onCategoryClick}
                        />
                     </div>
                          
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