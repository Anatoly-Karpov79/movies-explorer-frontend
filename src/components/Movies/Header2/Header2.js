import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header2.css'
import acaunt from '../../../images/acaunt.svg'
import menu from '../../../images/menu.svg'
import Menu from '../../Main/Menu/Menu';

function Header2({setActive}) {
   
    return (
        <header className="header2" id="header">
            <Link to="/" className="header2__logo">
                <img src={logo} alt="логотип" />
            </Link>
            <Link to="/movies" className="header2__button" >
                Фильмы
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
    );
}

export default Header2;