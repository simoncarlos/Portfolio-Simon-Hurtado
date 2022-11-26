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
    position: absolute;
    width: 50px;
    z-index: 20;
`;
// animation: ${apearedLine} 1s linear;
export { Logo };