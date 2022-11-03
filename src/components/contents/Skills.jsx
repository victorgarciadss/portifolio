import { useEffect } from 'react';

import Tilt from 'react-parallax-tilt'
import Aos from 'aos';

import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiJava, DiGit } from 'react-icons/di';
import { SiC, SiStyledcomponents } from 'react-icons/si';

import '../styles/Skills.css';

const Skills = () => {

    const hardSkills = [
        {
            id: 1,
            name: 'HTML',
            skill: <DiHtml5 />,
        },
        {
            id: 2,
            name: 'CSS',
            skill: <DiCss3 />,
        },
        {
            id: 3,
            name: 'JavaScript',
            skill: <DiJsBadge />,
        },
        {
            id: 4,
            name: 'ReactJS',
            skill: <DiReact />,
        },
        {
            id: 5,
            name: 'C',
            skill: <SiC />,
        },
        {
            id: 6,
            name: 'Java',
            skill: <DiJava />,
        },
        {
            id: 7,
            name: 'Git',
            skill: <DiGit />,
        },
        {
            id: 8,
            name: 'Styled Components',
            skill: <SiStyledcomponents />,
        }
    ]

    useEffect(() => {
        Aos.init({ duration: 500})
    }, []);

    
    return(
        <div id='skills' data-aos="fade-right">

            <h1 className='skiils-title'>Skills</h1>
            
            <section className='global-skills'>

                <p className='explanation'>
                    Veja um pouco das minhas Habilidades
                </p>

                <ul className='container-hard-skills'>
                    {hardSkills.map((item) => (
    
                        <Tilt key={item.id}>

                             <li className='hard-skill'>
                                <span className='icon-skill'>{item.skill}</span>
                                <p className='name-icon'>{item.name}</p>
                            </li>
                            
                        </Tilt>    
                    ))}
                </ul>
               
            </section>

        </div>
    )
}

export default Skills;