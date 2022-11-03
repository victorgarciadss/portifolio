import NavBar from "../layout/NavBar";

import AboutMe from "../contents/AboutMe";
import TechData from "../contents/TechData";
import Projects from "../contents/Projects";
import Skills from '../contents/Skills';
import Contact from "../contents/Contact";

import '../styles/Main.css';

const Home = () => {

    return(
        <div className="containerOrganization">
            <div className="navbar">
                <NavBar />
            </div>

            <div className="variable-content">
                <AboutMe />
                <TechData />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </div>
    )
    
}

export default Home;