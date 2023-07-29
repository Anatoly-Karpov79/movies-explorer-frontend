import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header2.css'
import acaunt from '../../../images/acaunt.svg'
function Header2({ loggedIn }) {
   
    return (
        
           
                <header className="header2" id="header">
                    <Link to="/" className="header2__logo">
                        <img src={logo} alt="логотип" />
                    </Link>
                    <NavLink
                            to="/movies"
                            className="header2__button"
                            activeClassName="header2__button_active">
                            Фильмы
                        </NavLink>
                    
                    <NavLink
                            to="/savedmovies"
                            className="header2__button"
                            activeClassName="header2__button_active">
                            Сохранённые фильмы
                        </NavLink>
                    <div className="header2__container">
                        <Link to="/profile" className="header2__account-button">
                           <img src={acaunt} alt="аккаунт"/>
                        </Link>
                       
                            
                        
                    </div>
                   
                </header>
            
        
    );
}

export default Header2;