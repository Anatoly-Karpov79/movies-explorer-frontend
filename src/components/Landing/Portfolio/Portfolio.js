import './Portfolio.css'

const Portfolio = () => {

    return (

        <section className="portfolio" id="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__container">
                <a href=" https://anatoly-karpov79.github.io/how-to-learn/" className="portfolio__link">
                    Статичный сайт
                </a>
                <a href="https://anatoly-karpov79.github.io/how-to-learn/"
                    className="portfolio__arrow portfolio__link">&#129149;</a>
            </div>
            <hr className="portfolio__line"></hr>
            <div className="portfolio__container">
                <a href="https://anatoly-karpov79.github.io/russian-travel/" className="portfolio__link">
                    Адаптивный сайт
                </a>
                <a href="https://anatoly-karpov79.github.io/russian-travel/"
                    className="portfolio__arrow portfolio__link">&#129149;</a>
            </div>
            <hr className="portfolio__line"></hr>
            <div className="portfolio__container">
                <a href="https://anatoly-karpov79.github.io/russian-travel/" className="portfolio__link">
                    Одностраничное приложение
                </a>
                <a href="https://anatoly-karpov79.github.io/russian-travel/"
                    className="portfolio__arrow portfolio__link">&#129149;</a>
            </div>
        </section>

    )
}

export default Portfolio;