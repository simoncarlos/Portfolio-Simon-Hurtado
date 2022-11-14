import styled, { keyframes } from "styled-components";

const desapearContainer = keyframes`
    from{
        border: 3vw solid black;
    }
    to{
        border: 0 solid black;
    }
`;

const Container = styled.div`
    background-color: #fcfcf4;
    border: 3vw solid black;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${desapearContainer} 1.1s linear;
    animation-delay: 5s;
`;

export { Container };