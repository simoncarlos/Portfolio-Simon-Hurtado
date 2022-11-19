import styled from "styled-components";

const BackgroundNavBarMobile = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    background: rgba( 252, 252, 244, 0.65 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 6px );
    -webkit-backdrop-filter: blur( 6px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: all 1s ease;
    &.active{
        opacity: 1;
        height: calc(100% - 50px);
        width: 100%;
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