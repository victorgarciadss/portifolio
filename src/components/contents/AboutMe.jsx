import '../styles/AboutMe.css';

import professionalPicture from '../../images/foto-profissional.jpg';

const AboutMe = () => {

    function getMyAge(bornDate) {
        const today = new Date();
        const born = new Date(bornDate);

        let age = today.getFullYear() - born.getFullYear();

        const month = today.getMonth() - born.getMonth();
        const day = today.getDate() - born.getDate();

        if(month < 0 || (month === 0 && day < 0)) {
            age = age - 1;
        }

        return age;
    }

    return(
        <div id='about-me'>
        
            <h1 className='about-title'>Sobre mim</h1>
            
            <section className="about">

                <div className='container-photo'>
                    <img className='image-aboutSection' src={professionalPicture} alt="presentation" />
                </div>
            
                <p className='paragraph-aboutMe'>
                    &nbsp; Olá, meu nome é <span className='name'>Victor Garcia</span>, tenho {getMyAge(process.env.REACT_APP_BORN_DATE)} anos,
                    sou desenvolvedor de Software apaixonado por tecnologia. Tenho o objetivo de trabalhar com 
                    desenvolvimento FullStack, onde possuo experiência com tecnologias como TypeScript, Java e Spring Boot, o que me capacita no desenvolvimento de aplicações ponta a ponta. Tenho experiência com bancos de dados relacionais como PostgreSQL e Oracle, e não relacionais como MongoDB.
                </p>

                <p className='paragraph-aboutMe'>
                    &nbsp; Para desenvolvimento FrontEnd, costumo utilizar bibliotecas como React e dependendo do caso, utilizo o framework NextJs em conjunto. Trabalho com grande foco em garantir uma excelente experiência para o usuário e também busco garantir uma boa performance tanto do lado do cliente quanto do servidor.
                </p>

                <p className='paragraph-aboutMe'>
                    &nbsp; Atualmente curso Análise e Desenvolvimento de Sistemas com previsão de finalizar no final de 2025 onde adquiri conhecimentos em conceitos como estruturas de dados, algoritmos, programação orientada a objetos, engenharia de software, dentre outros.
                </p>

                <p className='paragraph-aboutMe'>
                     &nbsp; Bom, você poderá ver mais do meus projetos clicando no menu a esquerda. Se quiser algo parecido, entre em contato comigo.
                </p>
              
            </section>
            
        </div>
    )
}

export default AboutMe;