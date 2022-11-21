import styled from "styled-components";

const Button = styled.a`
    position: relative;
    border: 3px solid black;
    background-color: #fcfcf4;
    padding: 10px 20px;
    color: black;
    font-size: ${ props => props.size || "1.1rem" };
    font-family: SFmono;
    font-weight: 500;
    cursor: pointer;
    z-index: 0;
    &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: -8px;
        right: -8px;
        background-color: black;
        z-index: -1;
    }
    &:hover{
        bottom: -8px;
        right: -8px;
        &::after{
            display: none;
        }
    }
`;

export { Button };