import styled from "styled-components";

const Small = styled.small`
    font-size: ${ props => props.size || "1.5rem" };
    font-family: SFmono;
    font-weight: 500;

    &::selection{
        background-color: #ffe700;
        color: #fcfcf4;
    }

    @media(min-width: 768px){
        
    }

`;

export { Small }