import styled from "styled-components";

const ExperienceItemContainer = styled.article`
    position: relative;
    width: 95%;
    height: auto;
    margin-top: 40px;
    &:hover{
        bottom: -10px;
        right: -8px;
        .animation{
            display: none;
        }
    }
    .experience-content{
        position: relative;
        padding: 5%;
        border: 3px solid black;
        background-color: #fcfcf4;
        z-index: 10;
        .experience-header{
            display: flex;
            align-items: start;
            justify-content: space-between;
        }
    }
    .animation{
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 5%;
        left: 2%;
        background-color: ${props => props.color || "blue"};
        border: 3px solid black;
        z-index: 5;
    }
    @media(min-width: 768px){
        width: 45%;
    }
`;

export { ExperienceItemContainer }