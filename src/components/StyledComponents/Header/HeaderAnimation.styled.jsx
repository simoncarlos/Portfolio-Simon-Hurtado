import styled from "styled-components";

export const HeaderAnimationContainer = styled.section`
    position: absolute;
    top: 0;
    right: 0;
    width: 15%;
    height: calc(100% - 25px);
    div{
        transform: translateY(-30%);
        opacity: 0;
        border: 3px solid black;
        transition: all 1s ease;
        &:hover{
            transform: scale(1.06);
        }
    }
    display: grid;
    grid:
        "b1 c1" 1fr
        "b1 c2" 1fr
        "b2 c2" 1fr
        "b2 c2" 1fr
        "b2 c3" 1fr
        "b3 c3" 1fr
        "b3 c3" 1fr
        "b3 c4" 1fr
        "b4 c4" 1fr
        / 1fr 1fr;
    gap: 5px;

    .a1 { display: none; }
    .a2 { display: none; }
    .a3 { display: none; }
    .b1 { display: none; }
    .b2 { display: none; }
    .b3 { display: none; }
    .b4 { display: none; }
    .c1 { grid-area: c1; background-color: #232b69;}
    .c2 { grid-area: c2; background-color: #232b69;}
    .c3 { grid-area: c3; background-color: red;}
    .c4 { grid-area: c4; background-color: #ffc90a;}

    @media(min-width: 768px){
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
        .b1 { display: block; grid-area: b1; background-color: #232b69;}
        .b2 { display: block; grid-area: b2; background-color: red;}
        .b3 { display: block; grid-area: b3; background-color: #ffc90a;}
        .b4 { display: block; grid-area: b4; background-color: #232b69;}
    }
    @media(min-width: 1024px){
        .a1 { display: block; grid-area: a1; background-color: red;}
        .a2 { display: block; grid-area: a2; background-color: #ffc90a;}
        .a3 { display: block; grid-area: a3; background-color: #232b69;}
        right: 2.5%;
        width: 20%;
        gap: 8px;
    }
    `;