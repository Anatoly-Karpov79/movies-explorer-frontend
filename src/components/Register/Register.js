import { Link } from "react-router-dom";
import './Register.css'
import logo from '../../images/logo.svg'

const Register = () => {
  /* const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
 
   function handleRegisterSubmit(e) {
     e.preventDefault();
 
     props.onRegister(email, password);
   }
 
   function handleEmail(e) {
     setEmail(e.target.value);
   }
 
   function handlePassword(e) {
     setPassword(e.target.value);
   }*/
  return (
    <section className="register">
      <Link to="/" className="register__logo">
        <img src={logo} alt="логотип" />
      </Link>

      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="register__form">
        <label className="register__label">Имя</label>
        <input type="text"
          /*      onChange={handleEmail} */
          placeholder="Анатолий"
          className="register__input"
        />
        <label className="register__label">E-mail</label>
        <input
          type="email"
          /*      onChange={handleEmail} */
          placeholder="Email"
          className="register__input"
        />
        <label className="register__label">Пароль</label>
        <input
          type="password"
          /*     onChange={handlePassword}*/
          placeholder="Пароль"
          className="register__input"
        />
        <span className="register__form-error">
          Что-то пошло не так...
        </span>
        <button className="register__button">
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