import styled from 'styled-components';


export const Menu = styled.div`
    position: fixed;
    height: 100%;
    z-index: 1;
    
    .container-navbar{
        width: ${({open}) => open ? "15rem" : "0rem"};
        transition: 0.5s;
        background-color: #2b2c40;
        display: flex;
        position: fixed;
        flex-direction: column;
        height: 100%;
        left: 0rem; 
        margin-top: 0.5rem;
    }

    .links-container{
        margin-top: 3rem;
        margin-bottom: 5rem;
        display: flex;
        flex-direction: column;
    } 
        

    .links{
        position: relative;
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
        transition: 0.5s;
        padding: 1.5rem 0;
        width: 14rem;
        left: ${({open}) => open ? '0rem' : '-15rem'};
        overflow-x: hidden;
        padding-left: 1rem;
        display: flex;
        flex-direction: row;
        cursor: pointer;

    }

    .container-detail-icon{
        display: flex;
        align-items: center;
    }

    .links svg{
        font-size: 2rem;
        margin-right: 0.5rem;
    }



    @media screen and (min-width: 650px){
        .links:hover{
            background-color: blueviolet;
            
        }
    }

    @media screen and (max-width: 650px){
        position: fixed;
        backface-visibility: hidden;
    }

`

export const Button = styled.button`
    width: 12rem;
    font-size: 1.2rem;
    border: none;
    display: flex;
    align-items: center;
    color: white;
    cursor: pointer;
    border-radius: 0.3rem;
    padding: 0.5rem;
    margin-top: 10px;
    margin-left: 10px;
    background-color: rgb(15, 15, 15);
    border-radius: 15px;
    border: 1px solid white;

    .container-button-menu svg{
        font-size: 1.8rem;
        margin-right: 5px;
        align-content: center;
    }

    .text-button{
        margin: auto;
    }

    .menu-icon{
        margin-top: 0.2rem;
    }

    @media screen and (min-width: 650px){
        &:hover{
            background-color: ${props => props.text === "Fechar Menu" ? "red" : "green"}; 
        }
    }

    @media screen and (max-width: 650px){
        width: 60px;
        justify-items: center;
        justify-content: center;

        .container-button-menu svg{
            display: flex;
            margin: auto;
        }

        .text-button{
            display: none;
        }
    }
    
`