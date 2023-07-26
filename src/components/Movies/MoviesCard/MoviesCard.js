import movie from '../../../images/movie.png';
import saved from '../../../images/saved.png';
import './MoviesCard.css'

function MoviesCard ()  {

    return (
        <div className="moviescard">
            <h2 className="moviescard__name">33 слова о дизайне</h2>
            <img className="moviescard__saved" src={saved} alt="Сохранено" />
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