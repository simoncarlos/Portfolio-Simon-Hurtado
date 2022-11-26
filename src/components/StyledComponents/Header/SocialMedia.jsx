import styled from "styled-components";

const SocialMedia = styled.div`
    position: absolute;
    content: "";
    top: 50%;
    transform: translateY(-50%);
    left: calc( 10vw + 50px - 7.5px );
    height: 200px;
    width: 15px;
    background-color: #fcfcf4;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media(min-width: 768px){
        left: calc( 4vw + 50px - 7.5px );
    }
    @media(min-width: 1024px){
        display: flex;
    }
    a{
        color: black;
        text-decoration: none;
        background-color: transparent;
    }
    .icon{
        font-size: 20px;
        background-color: transparent;
    }
`;

export { SocialMedia };