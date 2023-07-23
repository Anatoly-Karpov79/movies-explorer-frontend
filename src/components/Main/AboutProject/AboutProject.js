import './AboutProject.css'


const AboutProject = () => {
    return (
        <div className="aboutproject" id="about">
            <h2 className="aboutproject__title">О проекте</h2>
            <hr className="aboutproject__line"></hr>
            <div className="aboutproject__content">
                <div className="aboutproject__info">
                    <h3 className="aboutproject__info-header">Дипломный проект включал 5 этапов</h3>
                    <p className="aboutproject__info-description">Составление плана,
                        работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutproject__info">
                    <h3 className="aboutproject__info-header">На выполнение диплома ушло 5 недель</h3>
                    <p className="aboutproject__info-description">У каждого этапа был мягкий и жёсткий
                        дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>

            </div>
            <div className="aboutproject__timeline">
                <p className="aboutproject__timeline-info aboutproject__timeline-info-black">1 неделя</p>
                <p className="aboutproject__timeline-info">4 недели</p>
                <p className="aboutproject__timeline-description">Back-end</p>
                <p className="aboutproject__timeline-description">Front-end</p>
            </div>
        </div>

    )
}

export default AboutProject;