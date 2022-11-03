import imageImcCalc from '../../images/imagem-calculadora-imc.png';

const ImcCalculator = () => {
    return(
        <>
            
            <img
                data-aos="zoom-in"
                className="variable-img"
                src={imageImcCalc}
                alt="calculator"
            />
        
            <div className="container-info-project" data-aos="fade-down">
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
            </div>

        </>
    )
}

export default ImcCalculator;