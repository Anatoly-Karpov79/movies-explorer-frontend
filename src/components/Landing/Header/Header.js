import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.svg'
import './Header.css'
import acaunt from '../../../images/acaunt.svg'
import menu from '../../../images/menu.svg'

function Header({ loggedIn, setActive}) {

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
            
            <header className="header2" id="header">
            <Link to="/" className="header2__logo">
                <img src={logo} alt="логотип" />
            </Link>
            <Link to="/categories" className="header2__button" >
                Категории
            </Link>
            <Link
                to="/savedmovies"
                className="header2__button" >
                Сохранённые фильмы
            </Link>
            <div className="header2__container">
                <Link to="/profile" className="header2__account-button" >
                    <img src={acaunt} alt="аккаунт" />
                </Link>
            </div>
            <button className="header2__menu" onClick={setActive}>
                <img src={menu} alt="menu" />
            </button>
            
        </header>
        )}
        </>
        

    )
}

export default Header;