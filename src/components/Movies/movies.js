import Header2 from "./Header2/Header2";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCard from "./MoviesCard/MoviesCard";

const Movies = () => {
    return (
        <div>
            <Header2 />
            <SearchForm />
           <MoviesCard />
            <Footer />
        </div>
    )
}

export default Movies;