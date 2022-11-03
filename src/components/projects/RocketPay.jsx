import imageRocketPay from '../../images/imagem_rocketpay.png';

const RocketPay = () => {
    return(
        <>
            
            <img
                data-aos="zoom-in"
                className="variable-img"
                src={imageRocketPay}
                alt="rocketpay"
            />
            
            <div className="container-info-project" data-aos="fade-down">
                <a
                href="https://rocketpay-vg.vercel.app/"
                target={"_blank"}
                rel="noreferrer noopener"
                className="link-projects"
                >
                    RocketPay
                </a>

                <p className="info">
                    Desenvolvi esse projeto durante o Explorer-Lab da Rocketseat onde o usuário pode construir um
                    cartão visa ou mestercard, nesse projeto aprendi bastante sobre Vite, Imask e expressões 
                    regulares, essas últimas que são técnicas fundamentais na construção de um formulário
                </p>

                <h3 className="technologies">Tecnologias Usadas</h3>
                <ul className="list-items">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Vite</li>
                    <li>Imask</li>
                </ul>
            </div>
            
        </>
    )
}

export default RocketPay;