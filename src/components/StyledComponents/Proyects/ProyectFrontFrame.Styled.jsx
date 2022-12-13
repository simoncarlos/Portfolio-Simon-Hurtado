import styled from "styled-components";

export const ProyectFrontFrame = styled.div`
    background-color: #fcfcf4;
    border: 3px solid black;
    width: 100%;
    height: 100%;
    position: absolute;
    content: "";
    top: 0;
    ${ props => props.align }
    z-index: -1;
    padding: 2%;
    div {
        width: 100%;
        height: 100%;
        border: 3px solid black;
        overflow: hidden;
    }
    img{
        width: 100%;
        height: 100%;
        transform: scale(1);
        object-fit: cover;
    }
    @media(min-width: 768px){
        width: 60%;
    }
    @media(min-width: 1024px){
        width: 70%;
    }
`;