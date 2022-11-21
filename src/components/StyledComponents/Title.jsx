import styled from "styled-components";

const Title = styled.h1`
    font-size: ${ props => props.size || "4.5rem" };
    font-family: calibre;
    font-weight: 800;
    margin: 20px 0;
    &::selection{
        background-color: #006bff;
        color: #fcfcf4;
    }

`;

export { Title }