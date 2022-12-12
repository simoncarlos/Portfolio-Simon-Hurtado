import styled from "styled-components";

export const ProyectItemContainer = styled.div`
    position: relative;
    width: 100%;
    padding: 3%;
    margin: 60px 0;
    text-align: left;
    background-color: transparent;
    z-index: 0;
    @media(min-width: 768px){
        padding: 5% 0%;
        display: flex;
        align-items: center;
        justify-content: ${ props => props.align == "left" ? "start" : "end" };
    }
    @media(min-width: 1024px){
    }
`;