import React from "react";
import Header from "../Landing/Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";

function Movies({ setActive, movies, savedMovies, loggedIn, onLikeMovie }) {

    const [filteredMovies, setFilteredMovies] = useState([]);
    const searchedMovies = localStorage.getItem('searchedMovies');
    const queries = localStorage.getItem('searchQueryMovies');
    const [searchQuery, setSearchQuery] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (searchedMovies) {
            setFilteredMovies(JSON.parse(searchedMovies));
        }
    }, [searchedMovies]);

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
                    filtered = movies.filter((m) => {
                        return (
                            m.duration <= 40 &&
                            m.nameRU
                                .toLowerCase()
                                .trim()
                                .includes(query.searchText.toLowerCase())
                        );
                    });

                    setFilteredMovies(filtered);
                    console.log(filtered)

                    localStorage.setItem('searchedMovies', JSON.stringify(filtered));
                    console.log(searchedMovies)

                } else if (!query.isShortFilmChecked) {
                    filtered = movies.filter((m) => {
                        return m.nameRU
                            .toLowerCase()
                            .trim()
                            .includes(query.searchText.toLowerCase());
                    });

                    setFilteredMovies(filtered);
                    console.log(filtered)
                    localStorage.setItem('searchedMovies', JSON.stringify(filtered));
                    console.log(searchedMovies)
                }
                setIsLoading(false);
            },
            filteredMovies.length ? 0 : 300
        );
    };



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
                    <MoviesCardList
                        movies={filteredMovies}
                        savedMovies={savedMovies}
                        onLikeMovie={onLikeMovie} />

                </main>
                <Footer />


            </div>
        )}
        </>
    )
}

export default Movies;