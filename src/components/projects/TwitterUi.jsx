import imageTwitterUi from '../../images/imagem-twitter-ui.png'

const TwitterUi = () => {
    return (
        <>
            <img
                data-aos="zoom-in"
                className="variable-img"
                src={imageTwitterUi}
                alt="twitter-ui"
            />

            <div className='container-info-project' data-aos='fade-down'>
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
            </div>
        </>
    )
}

export default TwitterUi;