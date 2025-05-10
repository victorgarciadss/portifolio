import { useEffect } from "react";

import '../styles/Projects.css';

import Aos from "aos";
import Jokenpo from '../components/projects/Jokenpo';
import Calculator from '../components/projects/Calculator';
import ImcCalculator from '../components/projects/ImcCalculator';
import RocketPay from '../components/projects/RocketPay';
import AluraTube from "../components/projects/AluraTube";
import TwitterUi from "../components/projects/TwitterUi";

const Projects = () => {

    useEffect(() => {
        Aos.init({ duration: 650 })
    }, []);

    return(
        <div id='projects'>
            
            <h1 className='projects-title'>Projetos</h1>
            
            <section className="main-container">
                
                <div className="left-projects">
                    <div className='projects'>
                        <Jokenpo />
                        <ImcCalculator />
                        <AluraTube />
                    </div>
                </div>

                <div className="right-projects">
                    <div className='projects'>
                        <Calculator />
                        <RocketPay />
                        <TwitterUi />
                    </div>
                </div>
                
            </section>

        </div>
    )
}

export default Projects;