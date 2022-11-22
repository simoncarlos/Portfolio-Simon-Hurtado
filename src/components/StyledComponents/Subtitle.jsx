import styled from "styled-components";

const Subtitle = styled.h1`
    font-size: ${ props => props.size || "1.7rem" };
    font-family: calibre;
    font-weight: 800;
    line-height: 40px;
    margin: 10px 0 -10px 0;
    &::selection{
        background-color: #006bff;
        color: #fcfcf4;
    }
    @media(min-width: 768px){
        line-height: 60px;
    }
    @media(min-width: 1024px){
        line-height: 70px;
    }

`;

export { Subtitle }