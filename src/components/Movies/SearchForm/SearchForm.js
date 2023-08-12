import { useEffect, useState } from 'react';
import './SearchForm.css'
import { useLocation } from 'react-router-dom';

const SearchForm = ({ onFilter, searchQuery}) => {
    const [searchText, setSearchText] = useState('');
 /*   const [error, setError] = useState(''); */
   
    const [isShortFilmChecked, setIsShortFilmChecked] = useState(false);



    useEffect(() => {
        if (searchQuery.searchText) {
          setSearchText(searchQuery.searchText);
        }
      }, [searchQuery.searchText]); 

      const handleChange = (e) => {
        setSearchText(e.target.value);
      };

      const checkFilterBox = () => {
        if (searchText !== '') {
          setIsShortFilmChecked(!isShortFilmChecked);
          onFilter({
            searchText: searchText,
            isShortFilmChecked: !isShortFilmChecked
          });
        } else {
          setIsShortFilmChecked(!isShortFilmChecked);
    
          onFilter({
            searchText: searchQuery.searchText,
            isShortFilmChecked: !isShortFilmChecked
          });
        }
      };
    

      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!searchText) {
       /*   setError('Нужно ввести ключевое слово'); */
          return;
        } else {
          onFilter({ searchText, isShortFilmChecked });
        }
      };
    

    
    return (
        <div className="searchform">
            <form className="searchform__container" onSubmit={handleSubmit}>
                <div className="searchform__loupe"></div>
                <input
                    className="searchform__input"
                    type="text"
                    name="search"
                    placeholder="Фильм"
                    value={searchText || ''}
                    onChange={handleChange}
                    required />
                <button className="searchform__button"
                    type="submit"
                    aria-label="поиск"                 >
                </button>
                <div className="searchform__vertline"></div>
                <div className="searchform__checkbox">
                    <label className="searchform__checkbox-switch">
                        <input type="checkbox" className="searchform__checkbox-input"
                         onChange={checkFilterBox}
                         isChecked={searchQuery.isShortFilmChecked} />
                        <span className="searchform__checkbox-slider-round"></span>
                    </label>
                    <span className="searchform__checkbox-text">Короткометражки</span>
                </div>
            </form>
            <hr className="searchform__line"></hr>
        </div>
    )
}

export default SearchForm;