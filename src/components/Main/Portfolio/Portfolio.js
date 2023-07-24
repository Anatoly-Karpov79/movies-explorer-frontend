import './Portfolio.css'
import { Link, NavLink } from 'react-router-dom';

const Portfolio = () => {

    return (

        <section className="portfolio" id="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__container">
                <Link to="/signup" className="portfolio__link">
                    Статичный сайт
                </Link>
                <p className="portfolio__arrow">&#129149;</p>
                            </div>
                            <hr className="portfolio__line"></hr>
            <div className="portfolio__container">   
                <Link to="/signin" className="portfolio__link">
                    Адаптивный сайт
                </Link>
                <p className="portfolio__arrow">&#129149;</p>
                </div>
                <hr className="portfolio__line"></hr>
                <div className="portfolio__container"> 
                <Link to="/" className="portfolio__link">
                    Одностраничное приложение
                </Link>
                <p className="portfolio__arrow">&#129149;</p>
            </div>
        </section>

    )
}




export default Portfolio;