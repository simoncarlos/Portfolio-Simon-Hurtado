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
            justify-content: space-between;
        }
        .aboutMeDescription{
            width: 45%;
        }
    }
    @media(min-width: 1024px){
        padding: 8% 15% 0 15%;
        .aboutMeDescription{
            width: 55%;
        }
    }
`;

export { AboutMeContainer };