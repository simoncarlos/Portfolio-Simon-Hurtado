import styled, { keyframes } from "styled-components";

const Nav = styled.nav`
    height: 50px;
    width: 100%;
    padding: 0 20px;
    background-color: #fcfcf4;
    border-bottom: 3px solid black;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
    }

    .navLinks{
        display: none;
    }

    @media(min-width: 768px) {
        .navLinks{
            position: initial;
            margin: 0;
            display: block;
            a{
                font-size: 1rem;
                display: inline;
            }
        }
    }
    
    .burguerButton{
        cursor: pointer;
        @media(min-width: 768px){
            
        }
    }  
    
    `;

export { Nav };