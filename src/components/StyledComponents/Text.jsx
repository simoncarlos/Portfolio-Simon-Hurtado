import styled from "styled-components";

const  Text = styled.p`
    font-size: ${ props => props.size || "1.5rem" };
    font-family: calibre;
    font-weight: 500;
    margin-bottom: 20px;
    &::selection{
        background-color: #ff0808;
        color: #fcfcf4;
    }
`;

export { Text }