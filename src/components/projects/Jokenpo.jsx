import imageJokenpo from '../../images/imagem_pedra-papel-tesoura.png';

const Jokenpo = () => {
    return(
        <>
                    
            <img
                data-aos="zoom-in"
                className="variable-img"
                src={imageJokenpo}
                alt="jokenpo"
            />  
                
            <div className="container-info-project" data-aos="fade-down">
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
            </div>

        </>
    )
}

export default Jokenpo;