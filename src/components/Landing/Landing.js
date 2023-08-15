import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import Header from "./Header/Header";

const Landing = ({ loggedIn, setActive }) => {
    return (
        <div className="landing">
            <Header loggedIn={loggedIn} setActive={setActive}/>
            <main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>

            <Footer />
        </div>
    )
}

export default Landing;