import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header.css'

function Header() {

    return (
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
    )
}

export default Header;