import styled, { keyframes } from "styled-components";

const apearedLine = keyframes`
    from{
        border-right: 0 solid black;
    }
    to{
        border-right: 3px solid black;
    }
`;

const Logo = styled.img`
    height: 50px;
    padding: 8px 20px 8px 0;
    border-right: 3px solid black;
`;
// animation: ${apearedLine} 1s linear;
export { Logo };