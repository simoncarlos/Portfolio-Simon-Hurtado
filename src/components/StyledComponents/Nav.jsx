import styled, { keyframes } from "styled-components";

const Nav = styled.nav`
    height: 80px;
    width: 100%;
    padding: 0 5vw;
    background-color: #fcfcf4;
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
        padding: 0 2vw;
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