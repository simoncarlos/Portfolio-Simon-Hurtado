import styled from "styled-components";

const Title = styled.h1`
    font-size: ${ props => props.size || "1.1rem" };
    font-family: calibre;
    font-weight: 800;
`;

export { Title }