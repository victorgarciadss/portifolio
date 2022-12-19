import { useEffect } from "react";

import '../styles/Projects.css';

import Aos from "aos";
import Jokenpo from '../projects/Jokenpo';
import Calculator from '../projects/Calculator';
import ImcCalculator from '../projects/ImcCalculator';
import RocketPay from '../projects/RocketPay';
import AluraTube from "../projects/AluraTube";

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
                    </div>
                </div>
                
            </section>

        </div>
    )
}

export default Projects;