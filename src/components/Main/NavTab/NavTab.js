import './NavTab.css';
import { Link } from 'react-router-dom';

const NavTab = () => {
    return (
        <navtab className="navtab">
            <Link to="#about-project" className="navtab__link">
                О проекте
            </Link>
            <Link to="#techs" className="navtab__link">
                Технологии
            </Link>
            <Link to="#aboutme" className="navtab__link">
                Студент
            </Link>
        </navtab>


    );
};

export default NavTab;