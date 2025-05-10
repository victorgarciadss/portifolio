import { Link } from 'react-router-dom';

import professionalPicture from '../images/foto-profissional.jpg';

import '../styles/Welcome.css';


const Welcome = () => {

    return(
        <div className='global-container'>
          
            <div className='initialInformation'>
                <div className='pictureContainer'>
                    <img
                        className='img-presentation'
                        src={professionalPicture}
                        alt="presentation" />
                </div>

                <div className='reception'>
                    <p className='infoDev'>
                        <span className='name'>Victor Garcia</span> <br />
                        <span className='job'> Desenvolvedor FullStack</span>
                    </p>

                    <p className='welcome'>Olá, seja muito bem vindo <br /> ao meu portfólio</p>

                    <div className='spaceButton'>
                        <Link to={"/home"}>
                            <button className='enter'>Entrar</button>
                        </Link>
                    </div>
                </div> 
            </div>  
                
        </div>  
    )
    
}

export default Welcome;