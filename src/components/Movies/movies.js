import React from "react";
import Header2 from "./Header2/Header2";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies ({setActive}) {

    return (
        <div>
            <Header2 setActive={setActive} />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </div>
    )
}

export default Movies;