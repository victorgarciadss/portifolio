import { useState, useEffect } from 'react';
import { useRef } from 'react';

import { Link as Move } from 'react-scroll';

import { AiOutlineClose, AiOutlineUser, AiFillPhone} from 'react-icons/ai';
import {FaBars} from 'react-icons/fa';
import {BiFile} from 'react-icons/bi';
import {BsFillGearFill, BsCodeSlash} from 'react-icons/bs';

import { Button, Menu } from '../styles/styles';



const NavBar = () => {

    const links = [
        {
            id: 1,
            option: 'Sobre mim',
            way: "about-me",
            component: <AiOutlineUser />,
        },
        {
            id: 2,
            option: 'Especialização',
            way: "tech-information",
            component: <BiFile />,
        },
        {
            id: 3,
            option: 'Projetos',
            way: "projects",
            component: <BsCodeSlash />,
        },
        {
            id: 4,
            option: 'Skills',
            way: "skills",
            component: <BsFillGearFill />,
        },
        {
            id: 5,
            option: 'Contatos',
            way: "contact",
            component: <AiFillPhone />,
        },
    ]

    const [textButton, setTextButton] = useState("Abrir Menu");
    const [open, setOpen] = useState(false);
    

    const changeStyle = () => {
        if(!open){
            setTextButton("Fechar Menu"); 
            setOpen(!open);
        }
        else{
            setTextButton("Abrir Menu");
            setOpen(!open);
        } 
    }

    const menuRef = useRef();
    
    useEffect(() => {
        const handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                setTextButton("Abrir Menu");
                setOpen(false);
            }  
        }

        document.addEventListener("mousedown", handler);

        return () => document.removeEventListener("mousedown", handler);
    });


    return(

        <Menu open={open} ref={menuRef}>
 
            <Button text={textButton} onClick={changeStyle}>

                <span className='container-button-menu'>
                    {textButton === "Fechar Menu" ?
                        <AiOutlineClose className='menu-icon' /> :
                        <FaBars className='menu-icon' />
                    }
                </span>

                <span className='text-button'>{textButton}</span>

            </Button>

            
            <div className={"container-navbar"}>
                <nav className="links-container">

                    {links.map((item) => (
                        <Move
                            key={item.id}
                            to={item.way}
                            className='links'
                            onClick={changeStyle}
                            smooth={true}
                            duration={500}
                        >
                            <span className='container-detail-icon'>
                                {item.component}
                                {item.option}
                            </span>
                        </Move>
                    ))}

                </nav>
            </div>
     
        </Menu> 
        
    )
    
}

export default NavBar;