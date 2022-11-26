import styled from "styled-components";

const CubeBottom = styled.div`
    position: absolute;
    left: calc( 10vw + 50px - 25px );
    bottom: 0;
    height: 50px;
    width: 50px;
    background-color: #fcfcf4;
    @media(min-width: 768px){
        left: calc( 4vw + 50px - 25px );
    }
`;

export { CubeBottom };