import styled, { keyframes } from "styled-components";

const Nav = styled.nav`
    height: 50px;
    width: 100vw;
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
        position: absolute;
        top: 50px;
        left: -2000px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        color:black;
        z-index: 2;
        display: block;
        a{
            color:black;
            font-size: 2rem;
            display: block;    
        }
        transition: all 2s ease-out;
        &.active{
            width:100%;
            height: calc(100% - 50px);
            display:block;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            top: 50px;
            left: 0;
            right: 0;
            text-align: center;
            color: black;
            z-index: 2;
        }
    }

    @media(min-width: 768px) {
        .navLinks{
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                display: inline;
            }
        }
    }
    
    .burguerButton{
        @media(min-width: 768px){
            display: none;
        }
    }  
    
    `;

export { Nav };