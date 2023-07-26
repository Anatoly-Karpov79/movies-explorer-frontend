import './Main.css'

const Main = () => {
    return (
        <section className="main" >
            <div className="search">
                <form className="search__container">
                    <div className="search__loupe"></div>
                    <input className="search__input" type="text" name="search" placeholder="Фильм" required />
                    <button className="search__button" type="button" aria-label="поиск"></button>
                </form>
                < div className="search__checkbox">
                    <label class="switch">
                        <input type="checkbox"></input>
                            <span class="slider round"></span>
                    </label>

                    
                    <span className='checkbox__text'>Короткометражки</span>
                </div>
                <hr className="search__line"></hr>
            </div>
        </section>

    )
}

export default Main;