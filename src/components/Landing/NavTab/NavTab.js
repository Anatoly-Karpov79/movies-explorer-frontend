import './NavTab.css';
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavTab = () => {
    return (
        <nav className="navtab">
            <AnchorLink href="#about" className="navtab__link">
                О проекте
            </AnchorLink>
            <AnchorLink href="#techs" className="navtab__link">
                Технологии
            </AnchorLink>
            <AnchorLink href="#aboutme" className="navtab__link">
                Студент
            </AnchorLink>
        </nav>


    );
};

export default NavTab;