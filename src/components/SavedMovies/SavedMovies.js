import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header from "../Landing/Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";

function SavedMovies({ setActive, loggedIn, savedMovies, onDeleteMovie }) {

  const [filteredMovies, setFilteredMovies] = useState([]);
  const searchedMovies = localStorage.getItem('searchedSavedMovies');
  const queries = localStorage.getItem('searchQuerySavedMovies');
  const [searchQuery, setSearchQuery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSpanActive, setIsSpanActive] = useState(false);

  useEffect(() => {

    setFilteredMovies(savedMovies);

  }, [savedMovies,]);

  useEffect(() => {
    if (queries) {
      setSearchQuery(JSON.parse(queries));
    } else {
      setSearchQuery({ ...queries, searchText: '' });
    }
  }, [queries, savedMovies]);

  const filterMovies = (query) => {
    if (!filteredMovies.length) {
      setIsLoading(true);
    }
    setTimeout(
      () => {
        let filtered = [];
        localStorage.setItem('searchedSavedMovies', JSON.stringify(query));
        if (query.isShortFilmChecked) {
          filtered = savedMovies.filter((m) => {
            return (
              m.duration <= 40 &&
              m.nameRU
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
          localStorage.setItem('searchedSavedMovies', JSON.stringify(filtered));
        } else if (!query.isShortFilmChecked) {
          filtered = savedMovies.filter((m) => {
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
          localStorage.setItem('searchedSavedMovies', JSON.stringify(filtered));
        }
        setIsLoading(false);
      },
      filteredMovies.length ? 0 : 300
    );
  };



  return (
    <> {isLoading ? (
      <Preloader />
    ) : (

      <div className='savedmovies'>
        <Header setActive={setActive} loggedIn={loggedIn} />
        <main>
          <SearchForm onFilter={filterMovies}

            searchQuery={searchQuery} />
          <span className={`searchform__span ${isSpanActive ? "searchform__span_active" : ""
            }`}>
            Ничего не найдено
          </span>

          <MoviesCardList movies={filteredMovies}
            onDeleteMovie={onDeleteMovie} />
        </main>
        <Footer />
      </div>
    )}
    </>
  )
}

export default SavedMovies;