import React from "react";
import Header from "../../Landing/Header/Header";
import Footer from "../../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import SubCategoriesList from "../SubCategoriesList/SubCategoriesList";
import { useState, useEffect } from "react";
import Preloader from "../../Preloader/Preloader";
import { categoriesApi } from "../../../utils/CategoriesApi"; 
import { subCategoriesApi } from "../../../utils/SubCategoriesApi";

import InfoTooltip from "../../InfoTooltip/InfoTooltip";
// import error from '../../../images/error.svg';
// import success from '../../images/success.svg';
import { useForm } from "react-hook-form";



function SubCategories({ loggedIn, category, product, props, setActive, onCreateProduct, onSubCategoryClick, savedMovies, onCreateSubCategory }) {

    const [filteredMovies, setFilteredMovies] = useState([]);
    const searchedMovies = localStorage.getItem('searchedMovies');
    const [subCategories, setSubCategories] = useState([]);

    const queries = localStorage.getItem('subCategories');
    const [searchQuery, setSearchQuery] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSpanActive, setIsSpanActive] = useState(false);
    const [name, setName] = useState("");
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        setValue,
        watch,
    } = useForm({
        mode: "all",
    });
    const form = document.getElementById('newSubCategory');
    const categoryId = category._id

    useEffect(() => {
        if (queries) {
            setSearchQuery(JSON.parse(queries));
        }
    }, [queries]);

    function createSubCategory(data) {
        console.log(data, categoryId)
        onCreateSubCategory(data, categoryId);
        form.reset()
    }

    
        return (
        <>   {isLoading ? (
            <Preloader />
        ) : (
            <div>
 <h1>Это subCategories.js</h1>
                <Header setActive={setActive} loggedIn={loggedIn} />
                <main>
                <h2 className="moviescard__name">{category.name}</h2>
                    {/*  */}
                    <span className={`searchform__span ${isSpanActive ? "searchform__span_active" : ""
                        }`}>
                        Ничего не найдено
                    </span>
                    <form id="newSubCategory" className="register__form" onSubmit={handleSubmit(createSubCategory)}>
                        <label className="register__label">Новая подкатегория</label>
                        <input type="text"
                        id="subCategory__form"
                            placeholder="Название новой категории"
                            className="register__input"
                            {...register("name", {
                                required: "Это поле обязазательно для заполнения",
                                minLength: {
                                    value: 3,
                                    message: "Имя должно быть не меньше трех символов",
                                },
                            })}
                        />
                        <span className="login__form-error">
                            {errors.name ? errors.name.message : ""}
                        </span>
                        <button className="button" onClick={handleSubmit}>
                            Создать подкатегорию
                        </button>
                    </form>
                   

                    <SubCategoriesList
                    
                    loggedIn={loggedIn}
                    category={category.name}
                    categoryId={category._id}
                    product={product}
                   
                        subCategories={subCategories}
                        onSubCategoryClick={onSubCategoryClick}
                    />


                </main>
                <Footer />


            </div>
        )}
        </>
    )
}

export default SubCategories;

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