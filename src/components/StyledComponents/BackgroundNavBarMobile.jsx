import styled from "styled-components";

const BackgroundNavBarMobile = styled.div`
    position: absolute;
    top: 50px;
    left: -2000px;
    background-color: #fcfcf4;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-right: 10px solid black;
    transition: all 2s ease-out;
    &.active{
        top: 50px;
        left: 0;
        height: calc(100% - 50px);
        width: 100%;
        z-index: 1;
        border-right: 0px solid black
    }
`;

export { BackgroundNavBarMobile };