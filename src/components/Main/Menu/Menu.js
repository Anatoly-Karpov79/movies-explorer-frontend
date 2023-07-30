import './Menu.css'
import { NavLink, Link } from 'react-router-dom';
import acaunt from '../../../images/acaunt.svg'

function Menu() {
    
    return (
        <nav className="menu">
            <div className="menu__cover"></div>
            <div className="menu__container">
                <button className="menu__close" ></button>

                <NavLink className={({ isActive }) => (isActive ? 'menu__link-activ' : 'menu__link')} to="/">Главная</NavLink>

                
                <NavLink className={({ isActive }) => (isActive ? 'menu__link-activ' : 'menu__link')} to="/movies" >Фильмы</NavLink>


                
                <NavLink className={({ isActive }) => (isActive ? 'menu__link-activ' : 'menu__link')} to="/savedmovies">Сохранённые фильмы</NavLink>

                <Link to="/profile" className="menu__account-button">
                           <img src={acaunt} alt="аккаунт"/>
                        </Link>
            </div>

        </nav>
    )
}

export default Menu;