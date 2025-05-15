import { useEffect } from "react";

import '../styles/Projects.css';

import Aos from "aos";
import imageJokenpo from '../images/imagem_pedra-papel-tesoura.png';
import imageImcCalc from '../images/imagem-calculadora-imc.png';
import imageCalculator from '../images/imagem-calculadora.png';
import imageTwitterUi from '../images/imagem-twitter-ui.png'
import { Project } from "../components/Project";

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
                        <Project image={imageJokenpo} altDescription={"Imagem de jogo jokenpo"}>
                            <a
                                href="https://pedra-papel-tesoura-victorgarciadss.vercel.app"
                                target={"_blank"}
                                rel="noreferrer"
                                className="link-projects"
                            >
                                Jogo Pedra-Papel-Tesoura
                            </a>

                            <p className='info'>
                                Projeto feito com foco em ReactJS, onde o usuário pode jogar o jogo
                                Pedra-Papel-Tesoura com elementos familiares do cotidiano
                            </p>

                            <h3 className="technologies">Tecnologias Utilizadas</h3>
                            <ul className='list-items'>
                                <li>ReactJs</li>
                                <li>JavaScript</li>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>Styled-Components</li>
                            </ul>
                        </Project>

                        <Project image={imageImcCalc} altDescription={"Imagem de calculadora IMC"}>
                            <a
                                href="https://victorgarciadss.github.io/calculadora-imc/"
                                target={"_blank"}
                                rel="noreferrer"
                                className="link-projects"
                            >
                                Calculadora IMC
                            </a>

                            <p className="info">
                                Esse foi um dos meus primeiros projetos com o trio HTML, CSS e
                                JavaScript, um projeto com foco em JS onde o usuário pode 
                                calcular o seu IMC, avaliando sua saúde corporal e com recomendações
                                do que deve ser feito. Pretendo ainda voltar e melhorar o visual dessa aplicação
                            </p>

                            <h3 className="technologies">Tecnologias Utilizadas</h3>
                            <ul className="list-items">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </Project>
                    </div>
                </div>

                <div className="right-projects">
                    <div className='projects'>
                        <Project image={imageCalculator} altDescription={"Imagem de website de calculadora"}>
                            <a
                                href="https://victorgarciadss.github.io/calculadora/"
                                target={"_blank"}
                                rel="noreferrer"
                                className="link-projects"
                            >
                                Calculadora
                            </a>

                            <p className='info'>
                                Esse foi um projeto que desenvolvi com foco em HTML, CSS e JavaScript para
                                consolidar os conhecimentos iniciais sobre as tecnologias na época, foi
                                extremamente importante para fixar conceitos sobre DOM e as funcionalidades
                                que o JavaScript permite
                            </p>

                            <h3 className="technologies">Tecnologias Utilizadas</h3>
                            <ul className='list-items'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </Project>

                        <Project image={imageTwitterUi} altDescription={"Imagem de website com uma interface semelhante ao twitter"}>
                            <a
                                href="https://twitter-user-interface.vercel.app/"
                                target={"_blank"}
                                rel='noreferrer'
                                className='link-projects'
                            >
                                Twitter UI
                            </a>

                            <p className='info'>
                                Nesse projeto eu usei na prática o conhecimento que adquiri em TypeScript, fazendo uma user
                                interface do Twitter, onde é possível realizar Tweets e responder tweets
                            </p>

                            <h3 className='technologies'>Tecnologias Utilizadas</h3>

                            <ul className='list-items'>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Vite</li>
                                <li>Styled-Components</li>
                            </ul>
                        </Project>
                        
                    </div>
                </div>
                
            </section>

        </div>
    )
}

export default Projects;