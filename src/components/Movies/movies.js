import React from "react";
import Header2 from "./Header2/Header2";
import Footer from "../Footer/Footer";
import Menu from "../Main/Menu/Menu";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

const Movies = () => {
    
    return (
        <div>
            <Menu />
            <Header2 />
            <SearchForm />
           <MoviesCardList />
            <Footer />
        </div>
    )
}

export default Movies;