import './Techs.css'


const Techs = () => {
    return (
        <section className="techs" id="techs">
            <h2 className="techs__title">Технологии</h2>
            <hr className="techs__line"></hr>
            <div className="techs__content">
                <div className="techs__info">
                    <h3 className="techs__info-header">7 технологий</h3>
                    <p className="techs__info-description">На курсе веб-разработки мы освоили
                        технологии, которые применили в дипломном проекте.</p>
                </div>
            </div>
            <ul className="techs__list">
                <li className="techs__list-item">HTML</li>
                <li className="techs__list-item">CSS</li>
                <li className="techs__list-item">JS</li>
                <li className="techs__list-item">React</li>
                <li className="techs__list-item">Git</li>
                <li className="techs__list-item">Express.js</li>
                <li className="techs__list-item">mongoDB</li>
            </ul>
        </section>

    )
}

export default Techs;