import styled from "styled-components";

const Small = styled.small`
    font-size: ${ props => props.size || "1.4rem" };
    font-family: SFmono;
    font-weight: 500;

    &::selection{
        background-color: #ffe700;
        color: #fcfcf4;
    }
`;

export { Small }