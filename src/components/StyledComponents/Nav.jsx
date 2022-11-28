import styled, { keyframes } from "styled-components";

const Nav = styled.nav`
    position: fixed;
    top: 0;
    height: 80px;
    width: 100%;
    padding: 0 5vw;
    background-color: #fcfcf4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 20;
    div{
        display: flex;
    }

    .navLinks{
        display: none;
    }

    @media(min-width: 768px) {
        padding: 0 2vw;
        .navLinks{
            position: initial;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 45%;
            a{
                color: black;
                text-decoration: none;
                small{
                    font-size: 1.1rem;
                }
            }
            a::after{
                content: '';
                display: block;
                position: relative;
                height: 3px;
                width: 0;
                left: 0;
                bottom: 0;
                background-color: black;
                transition: width 0.4s ease-in-out;
            }
            a:hover::after{
                width: 100%
            }
        }
    }
    
    @media(min-width: 1024px){
        .navLinks{
            width: 35%;
        }
    }

    .burguerButton{
        cursor: pointer;
        @media(min-width: 768px){
            display: none;
        }
    }  
    
    `;

export { Nav };