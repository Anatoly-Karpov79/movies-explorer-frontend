import { Link } from "react-router-dom";
import './Login.css'
import logo from '../../images/logo.png'
import React, { useState }  from "react";

const Login = (props) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
 
   function handleLoginSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    } else {
      props.onLogin(password, email);
      setEmail("");
      setPassword("");
    }
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <section className="login">
      <Link to="/" className="login__logo">
        <img src={logo} alt="логотип" />
      </Link>

      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form">
        <label className="login__label">E-mail</label>
        <input
          type="email"
           onChange={handleEmail} 
          placeholder="Email"
          className="login__input"
        />
        <label className="login__label">Пароль</label>
        <input
          type="password"
          onChange={handlePassword}  
          placeholder="Пароль"
          className="login__input"
        />
        <span className="login__form-error">
          Что-то пошло не так...
        </span>
        <button onClick={handleLoginSubmit} className="login__button">
          Войти
        </button>
      </form>
      <span className="login__subtext">Еще не зарегистрированы? <Link to="/signup"
        className="login__subtext login__link">
        Регистрация
      </Link></span>

    </section>
  );
};

export default Login;