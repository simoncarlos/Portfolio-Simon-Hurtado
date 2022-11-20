import styled from "styled-components";

const HeaderStyled = styled.header`

    height: calc(100vh - 50px);
    background-color: #fcfcf4;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0 5%;
    .header-info{
        width: 90%;
        @media(min-width: 768px){
            width: 80%
        }
        @media(min-width: 1024px){
            width: 55%;
        }
    }
`;

export { HeaderStyled };