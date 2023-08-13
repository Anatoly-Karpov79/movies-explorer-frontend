import { Link } from "react-router-dom";
import './Register.css'
import logo from '../../images/logo.svg'
import { useForm } from "react-hook-form";
import { REGEXP_EMAIL } from '../../utils/Constance'
import { REGEXP_NAME } from '../../utils/Constance'


const Register = (props) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
  })

  function handleRegisterSubmit(data) {
    props.onRegister(data);
  }

  return (
    <section className="register">
      <Link to="/" className="register__logo">
        <img src={logo} alt="логотип" />
      </Link>

      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit(handleRegisterSubmit)}>
        <label className="register__label">Имя</label>
        <input type="text"
          placeholder="Имя"
          className="register__input"
          {...register("name", {
            required: "Это поле обязазательно для заполнения",
            minLength: {
              value: 2,
              message: "Имя должно быть не меньше двух букв",
            },
            maxLength: {
              value: 30,
              message: "Имя должно быть не более чем 30 букв",
            },
            pattern: {
              value: REGEXP_NAME,
              message: "Поле может содержать буквы, тире или пробелы",
            },
          }
          )}
        />
        <span className="register__form-error">
          {errors.name ? errors.name.message : ""} 
        </span>
        <label className="register__label">E-mail</label>
        <input
          type="email"
          placeholder="Email"
          className="register__input"
          {...register("email", {
            required: "Это поле обязазательно для заполнения",
            pattern: {
              value: REGEXP_EMAIL,
              message: "Здесь должен быть корректный e-mail",
            },
          })}
        />
        <span className="register__form-error">
        {errors.email ? errors.email.message : ""}
        </span>
        <label className="register__label">Пароль</label>
        <input
          type="password"
          placeholder="Пароль"
          className="register__input"
          {...register("password", {
            required: "Это поле обязазательно для заполнения",
            minLength: {
              value: 3,
              message: "Пароль должен быть не меньше трех символов",
            },
          })}
        />
        <span className="register__form-error">
        {errors.password ? errors.password.message : ""}
        </span>
        <button onClick={handleSubmit} disabled={!isValid}  className={`register__button ${!isValid ? "register__button_disabled" : " "}`} >
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