import styled from "styled-components";

const HeaderStyled = styled.header`
    margin-top: 80px; 
    height: calc(100vh - 50px);
    background-color: #fcfcf4;
    padding: 25% 8% 0 8%;
    @media(min-width: 768px){
        
    }
    @media(min-width: 1024px){
        padding: 10% 0 0 20%;
    }
    .header-info{
        position: relative;
        width: 90%;
        padding: 30px 0 60px 0;
        background-color: #fcfcf4;
        z-index: 10;
        @media(min-width: 768px){
            width: 80%
        }
        @media(min-width: 1024px){
            width: 70%;
        }
    }
`;

export { HeaderStyled };