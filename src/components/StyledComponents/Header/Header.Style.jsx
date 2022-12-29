import styled from "styled-components";

const HeaderStyled = styled.header`
    margin-top: 80px; 
    height: calc(100vh - 50px);
    background-color: #fcfcf4;
    padding: 0 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(min-width: 768px){
        padding: 0 3% 0 8%;
    }
    @media(min-width: 1024px){
        padding: 0 7.5% 0 15%;
    }
    .header-info{
        margin-top: -90px;
        position: relative;
        width: 90%;
        padding: 30px 0 60px 0;
        background-color: #fcfcf4;
        z-index: 10;
        @media(min-width: 768px){
            width: 80%
        }
        @media(min-width: 1024px){
            background-color: transparent;
            width: 75%;
        }
    }
`;

export { HeaderStyled };