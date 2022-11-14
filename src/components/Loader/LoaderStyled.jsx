import styled, { keyframes } from "styled-components";

const desapearAnimation = keyframes`
    from{
        transform: scale(1);
    }
    to{
        transform: scale(0);
        opacity: 0.1;
    }
`;

const Animation = styled.img`
    width: 40vw;
    animation: ${desapearAnimation} 1.1s linear;
    animation-delay: 5s;
`;

export { Animation };