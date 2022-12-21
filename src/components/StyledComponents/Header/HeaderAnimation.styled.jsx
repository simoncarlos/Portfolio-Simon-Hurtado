import styled from "styled-components";

export const HeaderAnimationContainer = styled.section`
    @media(min-width: 1024px){
        position: absolute;
        top: 0;
        right: 10%;
        width: 20%;
        height: calc(100% - 25px);
        div{
            border: 4px solid black;
        }
        display: grid;
        grid:
            "a1 b1 c1" 1fr
            "a1 b1 c2" 1fr
            "a1 b2 c2" 1fr
            "a2 b2 c2" 1fr
            "a2 b2 c3" 1fr
            "a2 b3 c3" 1fr
            "a3 b3 c3" 1fr
            "a3 b3 c4" 1fr
            "a3 b4 c4" 1fr
            / 1fr 1fr 1fr;
        gap: 8px;

        .a1 { grid-area: a1; background-color: #de2d27;}
        .b1 { grid-area: b1; background-color: #232b69;}
        .c1 { grid-area: c1; background-color: #232b69;}
        .c2 { grid-area: c2; background-color: #232b69;}
        .b2 { grid-area: b2; background-color: #de2d27;}
        .a2 { grid-area: a2; background-color: #ffc90a;}
        .c3 { grid-area: c3; background-color: #de2d27;}
        .b3 { grid-area: b3; background-color: #ffc90a;}
        .a3 { grid-area: a3; background-color: #232b69;}
        .c4 { grid-area: c4; background-color: #ffc90a;}
        .b4 { grid-area: b4; background-color: #232b69;}
        }
`;