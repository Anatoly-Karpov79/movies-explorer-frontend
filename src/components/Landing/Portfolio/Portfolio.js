import './Portfolio.css'
import arrow from '../../../images/arrow.svg'


const Portfolio = () => {

    return (

        <section className="portfolio" id="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <a href=" https://anatoly-karpov79.github.io/how-to-learn/"
                className="portfolio__container"
                rel="noreferrer"
                target="_blank">
                <p className="portfolio__link">Статичный сайт</p>
                <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
            </a>
            <hr className="portfolio__line"></hr>
            <a href="https://anatoly-karpov79.github.io/russian-travel/"
                className="portfolio__container"
                rel="noreferrer"
                target="_blank">
                <p className="portfolio__link">Статичный сайт</p>
                <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
            </a>
            <hr className="portfolio__line"></hr>
            <a href="https://anatoly-karpov79.github.io/russian-travel/"
                className="portfolio__container"
                rel="noreferrer"
                target="_blank">
                <p className="portfolio__link">Статичный сайт</p>
                <img className="portfolio__arrow" src={arrow} alt="Стрелка" />
            </a>
        </section>

    )
}

export default Portfolio;