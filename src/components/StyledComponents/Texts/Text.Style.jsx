import styled from "styled-components";

const  Text = styled.p`
    font-size: ${ props => props.size || "1.4rem" };
    font-family: calibre;
    font-weight: 500;
    margin: ${ props => props.size || "30px 0" }; 
    &::selection{
        background-color: #ff0808;
        color: #fcfcf4;
    }
    @media(min-width: 768px){
        
    }
    @media(min-width: 1024px){
        
    }
`;

export { Text }