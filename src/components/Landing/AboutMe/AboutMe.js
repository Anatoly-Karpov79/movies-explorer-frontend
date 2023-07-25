import './AboutMe.css'
import myfoto from '../../../images/me.jpg'
import { Link } from 'react-router-dom';


const AboutMe = () => {
    return (
        <section className="aboutme" id="aboutme">
            <h2 className="aboutme__title">Студент</h2>
            <hr className="aboutme__line"></hr>
            <div className="aboutme__content">
                <div className="aboutme__info">
                    <h3 className="aboutme__info-header">Анатолий</h3>
                    <h4 className="aboutme__info-about">Фронтенд-разработчик, 42 года</h4>
                    <p className="aboutme__info-description">Я родился и живу в городе Междуреченск, Кемеровской области.
                        У меня есть жена и трое детей. Благодаря курсу Веб-разработчик в Яндекс Практикуме,
                        убедился, что мне интересна разработка. Хочу развиваться в этом направлении, постоянно
                        расширяя и углубляя свои знания.
                    </p>
                    <p>Github <a href="https://github.com/Anatoly-Karpov79">https://github.com/Anatoly-Karpov79</a></p>
                </div>
                <div className="aboutme__foto">
                    <img className="aboutme__foto" src={myfoto} alt="фото студента" />
                </div>

            </div>

        </section>

    )
}

export default AboutMe;