import styled from "styled-components";

export const ProyectNumber = styled.p`
    position: absolute;
    top: 50%;
    left: 15%;
    transform: translateY(-50%);
    font-size: ${ props => props.size || "15rem" };
    font-family: calibre;
    font-weight: 800;
    color: rgba(255, 0, 0, 0.075);
    &::selection{
        background-color: #006bff;
        color: #fcfcf4;
    }
`;