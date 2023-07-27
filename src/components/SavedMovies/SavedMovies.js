import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header2 from "../Movies/Header2/Header2";

function SavedMovies() {
    return (
        <main className='savedmovies'>
            <Header2 />
            <SearchForm />
            <MoviesCardList />
            {/* <Preloader /> */}
        </main>
    )

}

export default SavedMovies;