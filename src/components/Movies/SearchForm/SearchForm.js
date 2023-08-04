import './SearchForm.css'

const SearchForm = () => {
    return (
        <div className="searchform">
            <form className="searchform__container">
                <div className="searchform__loupe"></div>
                <input className="searchform__input" type="text" name="search" placeholder="Фильм" required />
                <button className="searchform__button" type="button" aria-label="поиск"></button>
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