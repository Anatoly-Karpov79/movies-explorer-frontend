import React from "react";
import './ProductsList.css'
import ProductCard from "../ProductCard/ProductCard";
import { productApi } from "../../../utils/ProductApi";
import { useState, useEffect } from "react";

function ProductList({ loggedIn, savedProducts, onCategoryClick }) {
  const [moviesToPage, setMoviesToPage] = useState(12);
  const [moviesAdd, setMoviesAdd] = useState(3);
  const [buttonHiden, setButtonHiden] = useState(true)
  const [category, setCategory] = useState([]);
 const [subCategoryName, setSubCategoryName] = useState([])
  const [categoryId, setCategoryId] = useState([])
const [products, setProducts] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState([]);



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
      if (localStorage.getItem('products')) {
        
        setProducts(JSON.parse(localStorage.getItem('savedProducts')));
        console.log(products)
          } else {
       productApi       
          .getProducts(subCategoryId)
          .then((products) => {
            localStorage.setItem('savedProducts', JSON.stringify(products));
            setProducts(products);
          })
          .catch((error) => {
            console.log(error);
          });
       }
    }
  }, [loggedIn, products]);

  return (
    <section className="moviescardlist">
      <h1> {subCategoryName}</h1>
     
      <h2>Товары</h2>
      <div className="moviescontent">
        {products.slice(0, moviesToPage).map((product) => {
          return (
            <div>

              <ProductCard
                loggedIn={loggedIn}
                key={product._id || product.productId}
                product={product}
                savedProducts={savedProducts}
                onCategoryClick={onCategoryClick}

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

export default ProductList;