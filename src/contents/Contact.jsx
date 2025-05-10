import { BsLinkedin, BsGithub} from 'react-icons/bs';

import '../styles/Contact.css';

const Contact = () => {

    const socialNetworks = [
        {
            id: 1,
            icon: <BsLinkedin />,
            name: "Linkedin",
            link: "https://www.linkedin.com/in/victor-garcia-27184a22b/",
        },
        {
            id: 2,
            icon: <BsGithub />,
            name: "GitHub",
            link: "https://github.com/victorgarciadss",
        },
    ] 

    return(
        <div id="contact">

            <h1 className="contact-title">Contatos</h1>

            <section className="contacts-content">

                <p className='invitation'>Entre em contato comigo por meio das redes abaixo:</p>

                <div className='social-container'>
                    {socialNetworks.map((item) => (

                        <div key={item.id} className="contacts">
                            <span className='icon'>{item.icon}</span>

                            <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className='link-social-network'
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                </div>
  
            </section>

            <footer>
                <p className='paragraph-copyright'>&copy; Victor Garcia - Desenvolvedor Full-Stack</p>
            </footer>
            
        </div>
    )
}

export default Contact;