import styled from "styled-components";

export const AboutMeKnowledge = styled.div`
    position: relative;
    img{
        height: 25px;
        margin-left: 5px;
    }
    small{
        margin-left: 10px;
        color: black;
    }
    margin: 15px 5px 0 0;
    padding: 8px 5px 8px 0;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(min-width: 768px){
        padding: 8px 10px;
        margin: 15px 15px 0 0;
        img{
            margin-left: 10px;
        }
        &::after, &::before{
            content: '';
            display: block;
            position: absolute;
            width: 0%;
            height: 0%;
            border: 2px solid;
            transition: all 0.6s ease;
        }
        &::after{
            bottom: 0;
            right: 0;
            border-color: transparent;
        }
        &::before{
            top: 0;
            left: 0;
            border-color: transparent;
        }
        &:hover:after, &:hover:before{
            border-bottom-color: black;
            border-right-color: black;
            border-top-color: black;
            border-left-color: black;
            width: 100%;
            height: 100%;
        }
    }
`;