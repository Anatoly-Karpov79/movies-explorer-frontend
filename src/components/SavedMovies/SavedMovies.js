import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header2 from "../Movies/Header2/Header2";
import Footer from "../Footer/Footer";

function SavedMovies({setActive}) {
    return (
        <main className='savedmovies'>
            <Header2 setActive={setActive}/>
            <SearchForm />
            <MoviesCardList />
            <Footer />
            {/* <Preloader /> */}

        </main>
    )

}

export default SavedMovies;