import styled from "styled-components";

const AboutMeProfile = styled.div`
    padding: 2%;
    width: 300px;
    height: 300px;
    margin-bottom: 100px;
    position: relative;
    @media(min-width: 768px){
        width: 350px;
        height: 350px;
    }
    @media(min-width: 1024px){
        width: 375px;
        height: 375px;
    }
    div{
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 10;
        position: relative;
        div:nth-child(1n+1){
            height: 8%;
            border: 3px solid black;
            border-bottom: 2px;
            display:flex;
            align-items:center;
            justify-content: start;
            background-color: #fcfcf4;
            span{
                margin-left: 5px;
                width: 7px;
                height: 7px;
                border-radius: 50%;
                &:nth-child(1n+1){
                    background-color: #ffc90a;
                }
                &:nth-child(1n+2){
                    background-color: #de2d27;
                }
                &:nth-child(1n+3){
                    background-color: #232b69;
                }
            }
        }
        div:nth-child(1n+2){
            height: 90%;
            border: 3px solid black;
            padding: 5%;
            background-color: #fcfcf4;
            div{
                height: 100%;
                width: auto;
                background-color: #ffc90a;
                border: 3px solid black;
                img{
                    width: 100%;
                    object-fit: cover;
                    transform: translate(0, 35px);
                }
            }
        }
    }
    .animation{
        position: absolute;
        content: "";
        height: 85%;
        width: 85%;
        bottom: 1%;
        right: -1%;
        z-index: 5;
        border: 3px solid black;
        background-color: red;
        @media(min-width: 768px){
            bottom: 2%;
            right: 1%;
        }
        @media(min-width: 1024px){
            bottom: 5%;
            right: 4%;
        }
    }
`;

export { AboutMeProfile }