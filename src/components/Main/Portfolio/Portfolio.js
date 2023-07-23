import './Portfolio.css'
import { Link, NavLink } from 'react-router-dom';

const Portfolio = () => {
   
    return (
        
            <section className="portfolio" id="portfolio">
                <h2 className="prtfolio__header">Портфолио</h2>
                    <Link to="/" className="header__logo">
                        
                    </Link>
                    <div className="header__button-container">
                        <Link to="/signup" className="header__button">
                            Регистрация
                        </Link>
                        <Link to="/signin" className="header__button header__button-black">
                            Войти
                        </Link>
                    </div>
                </section>
            
            )}
        
    


export default Portfolio;