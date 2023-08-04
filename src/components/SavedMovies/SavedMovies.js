import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header2 from "../Movies/Header2/Header2";
import Footer from "../Footer/Footer";

function SavedMovies({ setActive }) {
    return (
        <div className='savedmovies'>
            <Header2 setActive={setActive} />
            <main>
                <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
            {/* <Preloader /> */}

        </div>
    )

}

export default SavedMovies;