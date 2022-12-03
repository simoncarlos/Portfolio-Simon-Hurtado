import styled, { keyframes } from "styled-components";

const desapearAnimation = keyframes`
    0%{
        translate: 0;
        opacity: 1;
    }
    90%{
        translate: 0;
        opacity: 1;
    }
    100%{
        translate: 0% -40%;
        opacity: 0;
    }
`;

const LoaderAnimation = styled.img`
    width: 40vw;
    animation: ${desapearAnimation} 5.5s linear;
    opacity: 0;
    z-index: 20;
    @media(min-width: 768px){
        width: 25vw
    }
    @media(min-width: 1024px){
        width: 10vw;
    }
`;

export { LoaderAnimation };