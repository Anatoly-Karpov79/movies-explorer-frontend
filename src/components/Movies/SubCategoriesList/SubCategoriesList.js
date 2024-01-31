import React from "react";
import './SubCategoriesList.css'
import SubCategoryCard from "../SubCategoryCard/SubCategoryCard";
import { subCategoriesApi } from "../../../utils/SubCategoriesApi";
import { useState, useEffect } from "react";

function SubCategoriesList({ loggedIn, onSubCategoryClick, savedSubCategories, onCategoryClick }) {
  const [moviesToPage, setMoviesToPage] = useState(12);
  const [moviesAdd, setMoviesAdd] = useState(3);
  const [buttonHiden, setButtonHiden] = useState(true)
  const [category, setCategory] = useState([]);
    const [categoryName, setCategoryName] = useState([])
  const [categoryId, setCategoryId] = useState([])
  const [subCategories, setSubCategories] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState([]);
  const [subCategoryName, setSubCategoryName] = useState([]);



  useEffect(() => {
    if (localStorage.getItem('selectedCategoryName')) {
      setCategoryName(localStorage.getItem('selectedCategoryName'));
      setCategoryId(localStorage.getItem('selectedCategoryId'))
    }
  }, [category]);

  useEffect(() => {
    if (localStorage.getItem('selectedSubCategoryName')) {
      setSubCategoryName(localStorage.getItem('selectedSubCategoryName'));
      setSubCategoryId(localStorage.getItem('selectedSubCategoryId'))
    }
  }, [category]);

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
      setButtonHiden(false)
    };
  }, [subCategories, moviesToPage]);

  const handleClickButton = () => {
    setMoviesToPage(moviesToPage + moviesAdd);
  };

  useEffect(() => {
    if (loggedIn) {
      if (localStorage.getItem('subCategories')) {
        setSubCategories(JSON.parse(localStorage.getItem('savedSubCategories')));
          } else {
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
  }, [loggedIn, subCategories]);

 
  return (
    <section className="moviescardlist">
      <h1> {categoryName}</h1>
      <h2>Подкатегории</h2>
      <div className="moviescontent">
        {subCategories.slice(0, moviesToPage).map((subCategory) => {
          return (
            <div>

              <SubCategoryCard
                loggedIn={loggedIn}
                key={subCategory._id || subCategory.subCategoryId}
                subCategory={subCategory}
                savedSubCategories={savedSubCategories}
                onSubCategoryClick={onSubCategoryClick}
                
                
              />
              
            </div>
          );
        })}
      </div>
      
      <button
        className={`moviescardlist__button ${buttonHiden ? "moviescardlist__button_hidden" : ""
          }`}
        onClick={handleClickButton}
      >Ещё</button>
    </section>
  );
}

export default SubCategoriesList;
