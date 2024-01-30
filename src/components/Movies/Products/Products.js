import React from "react";
import Header from "../../Landing/Header/Header";
import Footer from "../../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import ProductList from "../ProductsList/ProductsList";
import { useState, useEffect } from "react";
import Preloader from "../../Preloader/Preloader";
import { categoriesApi } from "../../../utils/CategoriesApi";
import { subCategoriesApi } from "../../../utils/SubCategoriesApi";

import InfoTooltip from "../../InfoTooltip/InfoTooltip";
// import error from '../../../images/error.svg';
// import success from '../../images/success.svg';
import { useForm } from "react-hook-form";



function Products({ loggedIn, subCategoryName, category, product, props, setActive, onCreateProduct, onSubCategoryClick, subCategory, onCreateSubCategory }) {

    const [filteredMovies, setFilteredMovies] = useState([]);
    const searchedMovies = localStorage.getItem('searchedMovies');
    const [subCategories, setSubCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const queries = localStorage.getItem('subCategories');
    const [searchQuery, setSearchQuery] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSpanActive, setIsSpanActive] = useState(false);
    const [name, setName] = useState("");
    const [cost, setCost] = useState("")
    const [subCategoryId, setSubCategoryId] = useState([]);

    // const {
    //     setValue,
    //     formState: { errors, isValid },
    //     handleSubmit,

    //     watch,
    // } = useForm({
    //     mode: "all",
    // });
    const form = document.getElementById('newProduct');

       

   

    useEffect(() => {
        if (localStorage.getItem('selectedSubCategoryName')) {
            setSubCategoryId(localStorage.getItem('selectedSubCategoryId'))
        }
    }, [category]);


    useEffect(() => {
        if (queries) {
            setSearchQuery(JSON.parse(queries));
        }
    }, [queries]);


    
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
         e.preventDefault();
    
        // Передаём значения управляемых компонентов во внешний обработчик
        createProduct(name, cost) 
        console.log(name, cost)
        };

        function createProduct(name, cost) {
            // console.log(data)
            onCreateProduct(name, cost);
            form.reset()
        }

        function handleChangeName(e) {
            setName(e.target.value);
          }
        
    
          function handleChangeCost(e) {
            setCost(e.target.value);
          }

    return (
        <>   {isLoading ? (
            <Preloader />
        ) : (
            <div>
                <h1>Это products.js</h1>
                <Header setActive={setActive} loggedIn={loggedIn} />
                <main>
                    <h2 className="moviescard__name">{subCategory.name}</h2>
                    {/*  */}
                    <span className={`searchform__span ${isSpanActive ? "searchform__span_active" : ""
                        }`}>
                        Ничего не найдено
                    </span>

                    <h2>Форма создания товара</h2>
                    <form id="newProduct" className="register__form" onSubmit={handleSubmit}>
                        <label className="register__label">Новый продукт</label>
                        <fieldset>
                            <input type="text"
                                id="product__name__form"
                                placeholder="Название товара"
                                className="register__input"
                                name="name"
                                onChange={handleChangeName}
                            // {...setValue("name", {
                            //     required: "Это поле обязазательно для заполнения",
                            //     minLength: {
                            //         value: 3,
                            //         message: "Имя должно быть не меньше трех символов",
                            //     },
                            // })}
                            />
                            <span className="login__form-error">
                                {/* {errors.name ? errors.name.message : ""} */}
                            </span>
                            <input type="number"
                                id="product__cost__form"
                                placeholder="Стоимость товара"
                                className="register__input"
                                name="cost"
                                onChange={handleChangeCost}
                            // {...setValue("cost", {
                            //     required: "Это поле обязазательно для заполнения",
                            //     minLength: {
                            //         value: 2,
                            //         message: "Стоимость не меньше двух символов",
                            //     },
                            // })}
                            />

                            <button className="button" tipe="submit">
                                Создать Товар
                            </button>
                        </fieldset>

                    </form>

                    <ProductList

                        loggedIn={loggedIn}
                        // product={product.name}
                        // productId={product._id}
                        subCategoryId={subCategoryId}
                        subCategoryName={subCategoryName}
                        products={products}
                        onSubCategoryClick={onSubCategoryClick}
                    />


                </main>
                <Footer />


            </div>
        )}
        </>
    )
}

export default Products;

                    // <SearchForm searchQuery={searchQuery}
                    //     onFilter={filterMovies}
                    // />


  // const filterMovies = (query) => {
    //     if (!filteredMovies.length) {
    //         setIsLoading(true);
    //     }
    //     setTimeout(
    //         () => {
    //             let filtered = [];
    //             localStorage.setItem('searchQueryMovies', JSON.stringify(query));
    //             if (query.isShortFilmChecked) {
    //                 filtered = categories.filter((m) => {
    //                     return (

    //                         m.name
    //                             .toLowerCase()
    //                             .trim()
    //                             .includes(query.searchText.toLowerCase())
    //                     );
    //                 });
    //                 if (filtered.length === 0) {
    //                     setIsSpanActive(true)
    //                 } else {
    //                     setIsSpanActive(false)
    //                 }

    //                 setFilteredMovies(filtered);
    //                 localStorage.setItem('searchedMovies', JSON.stringify(filtered));
    //             } else if (!query.isShortFilmChecked) {
    //                 filtered = categories.filter((m) => {
    //                     return m.nameRU
    //                         .toLowerCase()
    //                         .trim()
    //                         .includes(query.searchText.toLowerCase());
    //                 });
    //                 if (filtered.length === 0) {
    //                     setIsSpanActive(true)
    //                 } else {
    //                     setIsSpanActive(false)
    //                 }
    //                 setFilteredMovies(filtered);
    //                 localStorage.setItem('searchedMovies', JSON.stringify(filtered));
    //             }
    //             setIsLoading(false);
    //         },
    //         filteredMovies.length ? 0 : 300

    //     );
    // };