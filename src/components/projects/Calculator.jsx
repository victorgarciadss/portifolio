import imageCalculator from '../../images/imagem-calculadora.png';

const Calculator = () => {
    return(
        <>
            
            <img
                data-aos="zoom-in"
                className="variable-img"
                src={imageCalculator}
                alt="calculator"
            />
        
            <div className='container-info-project' data-aos="fade-down">
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
            </div>
             
        </>
    )
    
}

export default Calculator;