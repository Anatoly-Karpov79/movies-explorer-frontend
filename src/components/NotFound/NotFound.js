import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="notfound__container">
        <p className="notfound__title">404</p>
        <p className="notfound__text">Страница не найдена</p>
        <Link className="notfound__back-btn" to="/">
          Назад
        </Link>
      </div>
    </section>
  );
};

export default NotFound;