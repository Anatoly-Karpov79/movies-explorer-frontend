import React from "react";
import Header from "../Landing/Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import CategoriesList from "./MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import { categoriesApi } from "../../utils/CategoriesApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import error from '../../images/error.svg';
import success from '../../images/success.svg';
import { useForm } from "react-hook-form";



function Categories({ props, setActive, categories, savedMovies, loggedIn, onCreateCategory }) {

    const [filteredMovies, setFilteredMovies] = useState([]);
    const searchedMovies = localStorage.getItem('searchedMovies');
    const queries = localStorage.getItem('categories');
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
    })

    console.log("Категории")

        
      
    // useEffect(() => {
    //     if (searchedMovies) {
    //         setFilteredMovies(JSON.parse(searchedMovies));
    //     }
    // }, [searchedMovies]);

    useEffect(() => {
        if (queries) {
            setSearchQuery(JSON.parse(queries));
        }
    }, [queries]);

    

    const filterMovies = (query) => {
        if (!filteredMovies.length) {
            setIsLoading(true);
        }
        setTimeout(
            () => {
                let filtered = [];
                localStorage.setItem('searchQueryMovies', JSON.stringify(query));
                if (query.isShortFilmChecked) {
                    filtered = categories.filter((m) => {
                        return (

                            m.name
                                .toLowerCase()
                                .trim()
                                .includes(query.searchText.toLowerCase())
                        );
                    });
                    if (filtered.length === 0) {
                        setIsSpanActive(true)
                    } else {
                        setIsSpanActive(false)
                    }

                    setFilteredMovies(filtered);
                    localStorage.setItem('searchedMovies', JSON.stringify(filtered));
                } else if (!query.isShortFilmChecked) {
                    filtered = categories.filter((m) => {
                        return m.nameRU
                            .toLowerCase()
                            .trim()
                            .includes(query.searchText.toLowerCase());
                    });
                    if (filtered.length === 0) {
                        setIsSpanActive(true)
                    } else {
                        setIsSpanActive(false)
                    }
                    setFilteredMovies(filtered);
                    localStorage.setItem('searchedMovies', JSON.stringify(filtered));
                }
                setIsLoading(false);
            },
            filteredMovies.length ? 0 : 300

        );
    };

    function createCategory(data) {
   
        // Передаём значения управляемых компонентов во внешний обработчик
        onCreateCategory(data);
        console.log("Я здесь", data)
      }


    return (
        <>   {isLoading ? (
            <Preloader />
        ) : (
            <div>

                <Header setActive={setActive} loggedIn={loggedIn} />
                <main>

                    <SearchForm searchQuery={searchQuery}
                        onFilter={filterMovies}

                    />
                    <span className={`searchform__span ${isSpanActive ? "searchform__span_active" : ""
                        }`}>
                        Ничего не найдено
                    </span>
                    <form className="register__form" onSubmit={handleSubmit(createCategory)}>
        <label className="register__label">Имя</label>
        <input type="text"
          placeholder="Имя"
          className="register__input"
          {...register("name", {
            
            required: "Это поле обязазательно для заполнения",
            minLength: {
              value: 3,
              message: "Имя должно быть не меньше трех символов",
            },
          })}
        />
        <button   className="button" onClick={handleSubmit}>
        Создать категорию
        </button>
      </form>
                    
                    <CategoriesList
                        categories={categories}

                    />

                </main>
                <Footer />


            </div>
        )}
        </>
    )
}

export default Categories;