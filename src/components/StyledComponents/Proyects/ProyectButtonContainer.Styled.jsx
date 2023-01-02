import styled from "styled-components";

export const ProyectButtonContainer = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    padding-right: 5%;
    justify-content: space-between;
    @media(min-width: 768px){
        justify-content: start;
        div{
            margin-right: 20px;
        }
    }
`;