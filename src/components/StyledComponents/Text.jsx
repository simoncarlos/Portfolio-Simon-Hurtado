import styled from "styled-components";

const  Text = styled.p`
    font-size: ${ props => props.size || "1.1rem" };
    font-family: calibre;
    font-weight: 500;
`;

export { Text }