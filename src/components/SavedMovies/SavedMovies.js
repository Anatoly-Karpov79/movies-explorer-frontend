import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header2 from "../Movies/Header2/Header2";
import Footer from "../Footer/Footer";


function SavedMovies({ setActive, handleSearch, savedMovies, onDeleteMovie }) {

    

    return (
        <div className='savedmovies'>
            <Header2 setActive={setActive} />
            <main>
                <SearchForm handleSearch={handleSearch}/>
                <MoviesCardList movies={savedMovies}
                  
                  onDeleteMovie={onDeleteMovie}/>
            </main>
            <Footer />
            {/* <Preloader /> */}

        </div>
    )

}

export default SavedMovies;