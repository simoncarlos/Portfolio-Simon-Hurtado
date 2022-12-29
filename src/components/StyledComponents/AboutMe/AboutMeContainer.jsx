import styled from "styled-components";

const AboutMeContainer = styled.section`
    background-color: #fcfcf4;
    padding: 8%;
    .aboutMeProfile{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .aboutMeDescription{
        width: 100%;
        margin-bottom: 50px;
    }
    .knowledge{
        width: 100%;
    }
    @media(min-width: 768px){
        .aboutMeProfile{
            flex-direction: row;
            justify-content: space-around;
        }
        .aboutMeDescription{
            width: 45%;
        }
    }
    @media(min-width: 1024px){
    }
`;

export { AboutMeContainer };