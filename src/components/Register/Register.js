import { Link } from "react-router-dom";
import './Register.css'
import logo from '../../images/logo.svg'
import { useState } from "react";

const Register = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  function handleRegisterSubmit(e) {
    e.preventDefault();
    props.onRegister(name, email, password);
  
    console.log(isValid)
  }
  function handleName(e) {
    setName(e.target.value);
    setIsValid(e.target.closest('form').checkValidity());
    
    
  }


  function handleEmail(e) {
    setEmail(e.target.value);
    setIsValid(e.target.closest('form').checkValidity());
    
  }

  function handlePassword(e) {
    
    setPassword(e.target.value);
    setIsValid(e.target.closest('form').checkValidity());

  }

  return (
    <section className="register">
      <Link to="/" className="register__logo">
        <img src={logo} alt="логотип" />
      </Link>

      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <label className="register__label">Имя</label>
        <input type="text"
          onChange={handleName}
          placeholder="Анатолий"
          className="register__input"
          minLength="2"
          maxLength="30"
          required
        />
        <label className="register__label">E-mail</label>
        <input
          type="email"
          onChange={handleEmail}
          placeholder="Email"
          className="register__input"
          required
        />
        <label className="register__label">Пароль</label>
        <input
          type="password"
          onChange={handlePassword}
          placeholder="Пароль"
          className="register__input"
          required
          minLength="2"
          maxLength="10"
        />
        <span className="register__form-error">
          Что-то пошло не так...
        </span>
        <button type="button"  disabled={!isValid} onClick={handleRegisterSubmit} className={`register__button ${
         !isValid ? "register__button_disabled" : " "}`} >
          Зарегистрироваться
        </button>
      </form>
      <span className="register__subtext">Уже зарегистрированы? <Link to="/signin"
        className="register__link">
        Войти
      </Link></span>

    </section>
  );
};

export default Register;