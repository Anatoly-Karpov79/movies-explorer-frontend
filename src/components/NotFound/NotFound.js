import './NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <section className="notfound">
      <div className="notfound__container">
        <p className="notfound__title">404</p>
        <p className="notfound__text">Страница не найдена</p>
        <p onClick={() => navigate(-3)} className="notfound__back-btn" >
          Назад
        </p>
      </div>
    </section>
  );
};

export default NotFound;

