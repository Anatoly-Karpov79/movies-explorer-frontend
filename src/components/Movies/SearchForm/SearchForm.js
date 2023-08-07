import { useEffect, useState } from 'react';
import './SearchForm.css'

const SearchForm = ({ onFilter, searchQuery, onResetInput, apiErrors, handleSearch }) => {
    const [inputValue, setInputValue] = useState("");
   
   
    
   

    
      const handleInput = (evt) => {
        setInputValue(evt.target.value);
      };

      
      

      const handleSubmit = (evt) => {
        evt.preventDefault();
        
        localStorage.setItem("query", inputValue);
        handleSearch(inputValue);
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
                value={inputValue}
                onChange={handleInput}
                 required />
                <button className="searchform__button"
                 type="submit" 
                 aria-label="поиск"                 >
                    </button>
                <div className="searchform__vertline"></div>
                <div className="searchform__checkbox">
                    <label className="searchform__checkbox-switch">
                        <input type="checkbox" className="searchform__checkbox-input"></input>
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