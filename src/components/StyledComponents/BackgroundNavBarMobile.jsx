import styled from "styled-components";

const BackgroundNavBarMobile = styled.div`
    position: absolute;
    top: 83px;
    left: -100vw;
    width: 50%;
    height: calc( 100vh - 83px );
    z-index: -1;
    background: #fcfcf4;
    border-right: 3px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: all 2s ease;
    &.active{
        height: calc(100vh - 50px);
        left: 0;
        z-index: 1;
    }
    .navLinksResponsive{
        margin-top: 20px;
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        a{
            text-decoration: none;
            color: black;
            font-size: 2rem;
            font-family: calibre;
            font-weight: 800;
        }
    }
`;

export { BackgroundNavBarMobile };