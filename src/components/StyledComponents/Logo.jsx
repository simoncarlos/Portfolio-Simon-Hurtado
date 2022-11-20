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
    height: 80px;
    padding: 15px 20px 15px 0;
    border-right: 3px solid black;
`;
// animation: ${apearedLine} 1s linear;
export { Logo };