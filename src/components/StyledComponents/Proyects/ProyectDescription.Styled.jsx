import styled from "styled-components";

export const ProyectDescription = styled.article`
    widht: 100%;
    border: 3px solid black;
    padding: 10% 5%;
    background-color: #fcfcf4f0;
    @media(min-width: 768px){
        background-color: #fcfcf4;
        width: 70%;
        padding: 5%;
    }
    @media(min-width: 1024px){
        width: 50%;
    }
`;