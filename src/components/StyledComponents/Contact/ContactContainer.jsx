import styled from "styled-components";

export const ContactContainer = styled.section`
    background-color: #fcfcf4;
    padding: 8% 8% 25% 8%;
    .social-container{
        margin-top: 50px;
        display: flex;
        width: 70%;
        align-items: center;
        justify-content: space-between; 
    }
    @media(min-width: 1024px){
        padding: 5% 40% 10% 15%;
        .social-container{
            width: 35%;
        }
    }
`;