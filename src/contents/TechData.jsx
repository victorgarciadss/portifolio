import { useEffect } from 'react';

import certificateHtmlCss from '../images/certificado-Html-css.png';
import certificateJs from '../images/certificado-js.png';
import certificateReactJs from '../images/certificado-reactjs.png';
import logoIfrs from '../images/logo-ifrs.png';

import { FaExternalLinkAlt } from 'react-icons/fa';
import { DiJsBadge, DiReact, DiHtml5 } from 'react-icons/di';



import Aos from 'aos';
import 'aos/dist/aos.css';

import '../styles/TechData.css';


const TechData = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    const certificates = [
        {
            id: 1,
            image: certificateReactJs,
            icon: <DiReact />,
            name: 'Introdução ReactJS',
            instituition: 'Coodesh',
            link: 'https://coodesh.com/share/certificate/deb86850-2370-11ed-9234-5f9ec8ccf1f7',
        },
        {
            id: 2,
            image: certificateJs,
            icon: <DiJsBadge />,
            name: 'Introdução ao JavaScript',
            instituition: 'Fundação Bradesco',
        },
        {
            id: 3,
            image: certificateHtmlCss,
            icon: <DiHtml5 />,
            name: 'Introdução ao HTML e CSS',
            instituition: 'Digital Innovation One',
            link: 'https://www.dio.me/certificate/C8940E9C/share',
        }
    ]

    return(
        <div id='tech-information'>

            <h1 className='tech-title'>Especialização</h1>
            
            <section className="global-content">
                <h2 className='title-graduate'>Formações:</h2>

                <div className="container-formation">
                    <div className="formation-1">

                        <div>
                            <img className='logo-ifrs' src={logoIfrs} alt="logo" />
                        </div>

                        <div>
                            <h2 className="title-formation1">
                                Curso superior em Análise e Desenvolvimento de Sistemas
                            </h2>

                            <p className="time-college">
                                Início: Fevereiro 2022 / Conclusão Prevista: Dezembro 2025
                            </p>
                            
                            <p className='name-instituition'>Instituição: IFRS</p>
                        </div>

                    </div>

                    <div className="formation-2">
                        
                        <h2 className="title-formation2">
                            Ensino Médio
                        </h2>

                        <p className='high-school-status'>Status: Completo</p>

                    </div>
                </div>

                <br />
                <hr />

                <h2 className="certification">
                    Cursos / Certificados:
                </h2>

                <div className="certificates-container">
                    {certificates.map((item) => (
                        <div
                            className="data-certification"
                            key={item.id}
                            data-aos='flip-right'
                        >
                            <img
                                className="image-certificate"
                                src={item.image}
                                alt="certificate"
                            />
                            <p className="name-certificate">
                                {item.name} <span className='certificate-icon'>{item.icon}</span>
                            </p>

                            <p className='instituition-certificate'>Institução: {item.instituition}</p>

                            {item.id !== 2 ?
                                <a
                                    className='link-certificate'
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                   <FaExternalLinkAlt className='link-icon'/> Link para ver o certificado
                                </a> :
                                <p className='p-warning'>Link não disponibilizado pela instituição</p>
                            }
                        </div>
                    ))}
                </div>
            </section>
           
        </div>
    )
    
}

export default TechData;