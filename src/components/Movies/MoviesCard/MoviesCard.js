import movie from '../../../images/movie.png';
import saved from '../../../images/saved.png';
import delet from '../../../images/delete.png'

import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard() {
    const location = useLocation();

    return (
        <div className="moviescard">
            <h2 className="moviescard__name">33 слова о дизайне</h2>

            {location.pathname === '/savedmovies' &&
                <button type="button" aria-label="удалить фильм" className="moviescard__button" >
                    <img className="moviescard__saved" alt='удалить' src={delet} />
                </button>}

            {location.pathname === '/movies' &&
                <button type="button" aria-label="удалить фильм" className="moviescard__button" >
                    <img className="moviescard__saved" alt='Сохранено' src={saved} />
                </button>}

            
            <p className="moviescard__duration">1ч 47м</p>
            <img
                className="moviescard__image"
                src={movie}
                alt="33 слова о дизайне"
            />
        </div>
    );
}

export default MoviesCard;