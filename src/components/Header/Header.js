import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

function Header({ loggedIn }) {
   
    return (
        <>
            {!loggedIn ? (
                <header className="header" id="header">
                    <Link to="/" className="header__logo">
                        <img src={logo} alt="логотип" />
                    </Link>
                    <div className="header__button-container">
                        <Link to="/signup" className="header__button">
                            Регистрация
                        </Link>
                        <Link to="/signin" className="header__button header__button-black">
                            Войти
                        </Link>
                    </div>
                </header>
            ) : (
                <header className="header" id="header">
                    <Link to="/" className="form__logo">
                        <img src={logo} alt="логотип" />
                    </Link>
                    <div className="header__button-container_films">
                        <NavLink
                            to="/movies"
                            className="header__button"
                            activeClassName="header__button_active">
                            Фильмы
                        </NavLink>
                        <NavLink
                            to="/saved-movies"
                            className="header__button"
                            activeClassName="header__button_active">
                            Сохранённые фильмы
                        </NavLink>
                    </div>
                    <div className="header__button-container">
                        <Link to="/profile" className="header__account-button">
                           
                        </Link>
                        <button  className="header__menu-button">
                            
                        </button>
                    </div>
                   
                </header>
            )}
        </>
    );
}

export default Header;