import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header from "../Landing/Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";

function SavedMovies({ setActive, loggedIn, savedMovies, onDeleteMovie }) {

  const [filteredMovies, setFilteredMovies] = useState([]);
  const searchedMovies = localStorage.getItem('searchedSavedMovies');
  const queries = localStorage.getItem('searchQuerySavedMovies');
  const [searchQuery, setSearchQuery] = useState([]);

  useEffect(() => {
    console.log(searchedMovies)
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    } else {
      setFilteredMovies(savedMovies);
    }
  }, [searchedMovies, savedMovies]);

  useEffect(() => {
    if (queries) {
      setSearchQuery(JSON.parse(queries));
    } else {
      setSearchQuery({ ...queries, searchText: '' });
    }
  }, [queries, savedMovies]);

  const filterMovies = (query) => {
    localStorage.setItem('searchedSavedMovies', JSON.stringify(query));

    let filtered = [];
    if (query.isShortFilmChecked) {
      filtered = savedMovies.filter((m) => {
        return (
          m.duration <= 40 &&
          m.nameRU.toLowerCase().trim().includes(query.searchText.toLowerCase())
        );
      });
      setFilteredMovies(filtered);
      localStorage.setItem('searchedSavedMovies', JSON.stringify(filtered));
    } else if (!query.isShortFilmChecked) {
      filtered = savedMovies.filter((m) => {
        return m.nameRU
          .toLowerCase()
          .trim()
          .includes(query.searchText.toLowerCase());
      });
      setFilteredMovies(filtered);
      localStorage.setItem('searchedSavedMovies', JSON.stringify(filtered));
      console.log(filteredMovies)
    }
  };

  return (
    <div className='savedmovies'>
      <Header setActive={setActive} loggedIn={loggedIn} />
      <main>
        <SearchForm onFilter={filterMovies}
          searchQuery={searchQuery} />
        <MoviesCardList movies={filteredMovies}
          onDeleteMovie={onDeleteMovie} />
      </main>
      <Footer />
      

    </div>
  )

}

export default SavedMovies;