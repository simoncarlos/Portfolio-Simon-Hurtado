import styled from "styled-components";

const Small = styled.small`
    font-size: ${ props => props.size || "1rem" };
    font-family: SFmono;
    font-weight: 500;
`;

export { Small }