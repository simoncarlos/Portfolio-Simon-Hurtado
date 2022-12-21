import styled from "styled-components";

const AboutMeContainer = styled.section`
    background-color: #fcfcf4;
    padding: 5%;
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        article{
            width: 100%;
        }
    }
    @media(min-width: 768px){
        .aboutMeProfile{
            flex-direction: row;
            justify-content: space-around;
        }
        .aboutMeDescription{
            width: 45%;
        }
        .knowledge{
            width: 100%;
            padding: 0 7%;
            flex-direction: row;
            justify-content: space-between;
            article{
                width: 48%;
            }
        }
    }
    @media(min-width: 1024px){
        flex-direction: space-around;
    }
`;

export { AboutMeContainer };