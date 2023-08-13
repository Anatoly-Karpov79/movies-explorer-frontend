import { Link } from "react-router-dom";
import './Login.css'
import logo from '../../images/logo.svg'
import React, { useState }  from "react";
import { useForm } from "react-hook-form";
import { REGEXP_EMAIL } from '../../utils/Constance'

const Login = (props) => {
   const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
  })

 
   function handleLoginSubmit(data) {
    props.onLogin(data)
    }
  
  return (
    <section className="login">
      <Link to="/" className="login__logo">
        <img src={logo} alt="логотип" />
      </Link>

      <h2 className="login__title">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit(handleLoginSubmit)}>
        <label className="login__label">E-mail</label>
        <input
          type="email"
          placeholder="Email"
          className="login__input"
          {...register("email", {
            required: "Это поле обязазательно для заполнения",
            pattern: {
              value: REGEXP_EMAIL,
              message: "Здесь должен быть корректный e-mail",
            },
          })}
        />
        <span className="login__form-error">
        {errors.email ? errors.email.message : ""}
        </span>
        <label className="login__label">Пароль</label>
        <input
          type="password"
          placeholder="Пароль"
          className="login__input"
          {...register("password", {
            
            required: "Это поле обязазательно для заполнения",
            minLength: 3,
          })}
        />
        <span className="login__form-error">
        {errors.password ? errors.password.message : ""}
        </span>
        <button onClick={handleSubmit} disabled={!isValid} className={`login__button ${
         !isValid ? "login__button_disabled" : " "}`} >
          Войти
        </button>
      </form>
      <span className="login__subtext">Еще не зарегистрированы? <Link to="/signup"
        className="login__link">
        Регистрация
      </Link></span>

    </section>
  );
};

export default Login;