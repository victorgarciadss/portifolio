import '../styles/AboutMe.css';

import professionalPicture from '../../images/foto-profissional.jpg';

const AboutMe = () => {

    return(
        <div id='about-me'>
        
            <h1 className='about-title'>Sobre mim</h1>
            
            <section className="about">

                <div className='container-photo'>
                    <img className='image-aboutSection' src={professionalPicture} alt="presentation" />
                </div>
            
                <p className='paragraph-aboutMe'>
                    &nbsp; Olá, meu nome é <span className='name'>Victor Garcia</span>, tenho 20 anos,
                    sou desenvolvedor de Software apaixonado por tecnologia. Tenho o objetivo de trabalhar com 
                    desenvolvimento Web onde tenho construído meus próprios projetos utilizando a linguagem de
                    programação JavaScript/TypeScript junto da biblioteca React, estou aprofundando meu 
                    conhecimento na linguagem Java e no Spring Framework para me ajudar em aplicações Web também.
                    Estou cursando atualmente Análise e Desenvolvimento de Sistemas onde estou adquirindo
                    conhecimento em diversas áreas do desenvolvimento de Software, como sistemas operacionais,
                    Estrutura de dados, Programação orientada a objetos, etc, inclusive nas linguagens de 
                    programação C e Java.
                </p>

                <p className='paragraph-aboutMe'>
                     &nbsp; Bom, você poderá ver mais do meus projetos clicando no menu a esquerda, mas
                     basicamente eu já produzi calculadoras, alguns games, sites mais tradicionais, dentre
                     outros. Se quiser algo parecido, entre em contato comigo.
                </p>
              
            </section>
            
        </div>
    )
}

export default AboutMe;