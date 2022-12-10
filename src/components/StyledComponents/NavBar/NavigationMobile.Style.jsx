import styled from "styled-components";

export const NavigationMobile = styled.div`
    position: absolute;
    top: 83px;
    left: -100vw;
    width: 50%;
    padding: 10vh 0 20vh 0;
    height: calc( 100vh - 83px );
    z-index: -1;
    background: #fcfcf4;
    border-right: 3px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: all 1.5s ease;
    &.active{
        height: calc(100vh - 50px);
        left: 0;
        z-index: 1;
    }
    .nav-links{
        margin-top: 20px;
        height: 55%;
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
    .nav-social{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        a{
            font-size: 2rem;
            text-decoration: none;
            color: black;
            margin: 0 10px;
        }
    }
    @media(min-width: 768px){
        display: none;
    }
`;