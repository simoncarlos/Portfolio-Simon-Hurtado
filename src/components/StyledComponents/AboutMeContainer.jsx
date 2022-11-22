import styled from "styled-components";

const AboutMeContainer = styled.section`
    background-color: #fcfcf4;
    padding: 5%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    .aboutMeDescription{
        width: 100%;
    }
    @media(min-width: 768px){
        flex-direction: row;
        justify-content: space-around;
        .aboutMeDescription{
            width: 45%;
        }
    }
    @media(min-width: 1024px){
        flex-direction: space-around;
    }
    .aboutMeDescription{
        margin-bottom: 100px;
    }
`;

export { AboutMeContainer };