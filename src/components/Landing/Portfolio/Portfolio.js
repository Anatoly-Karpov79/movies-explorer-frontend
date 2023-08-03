import './Portfolio.css'

const Portfolio = () => {

    return (

        <section className="portfolio" id="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <a href=" https://anatoly-karpov79.github.io/how-to-learn/"
                className="portfolio__container"
                rel="noreferrer"
                target="_blank">
                <p className="portfolio__link">Статичный сайт</p>
                <p className="portfolio__arrow portfolio__link">&#129149;</p>
            </a>
            <hr className="portfolio__line"></hr>
            <a href="https://anatoly-karpov79.github.io/russian-travel/"
                className="portfolio__container"
                rel="noreferrer"
                target="_blank">
                <p className="portfolio__link">Адаптивный сайт</p>
                <p className="portfolio__arrow portfolio__link">&#129149;</p>
            </a>
            <hr className="portfolio__line"></hr>

            <a href="https://anatoly-karpov79.github.io/russian-travel/"
                className="portfolio__container"
                rel="noreferrer"
                target="_blank">
                <p className="portfolio__link">Одностраничное приложение</p>
                <p className="portfolio__arrow portfolio__link">&#129149;</p>
            </a>

        </section>

    )
}

export default Portfolio;