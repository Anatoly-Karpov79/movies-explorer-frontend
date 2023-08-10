import React from "react";
import Header2 from "./Header2/Header2";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies({ setActive, movies, handleSearch, onLikeMovie, handleChangeFilter}) {

    return (
        <div>
            <Header2 setActive={setActive} />
            <main>
                <SearchForm  handleSearch={handleSearch} handleChangeFilter={handleChangeFilter} />
                <MoviesCardList movies={movies}
                  onLikeMovie={onLikeMovie}/>
            </main>
            <Footer />
        </div>
    )
}

export default Movies;