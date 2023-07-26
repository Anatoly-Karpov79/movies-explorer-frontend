import './SearchForm.css'

const SearchForm = () => {
    return (

        <div className="searchform">
            <form className="searchform__container">
                <div className="searchform__loupe"></div>
                <input className="searchform__input" type="text" name="search" placeholder="Фильм" required />
                <button className="searchform__button" type="button" aria-label="поиск"></button>
                < div className="searchform__checkbox">
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                    <span className="checkbox__text">Короткометражки</span>
                </div>
            </form>

            <hr className="search__line"></hr>
        </div>


    )
}

export default SearchForm;