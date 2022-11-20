import styled from "styled-components";

const HeaderProfile = styled.div`
    padding: 2%;
    width: 400px;
    height: 400px;
    position: relative;
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
        bottom: 5%;
        right: 4%;
        border: 3px solid black;
        background-color: red;
    }
`;

export { HeaderProfile }