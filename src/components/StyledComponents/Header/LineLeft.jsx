import styled from "styled-components";

const LineLeft = styled.div`
    position: absolute;
    content: "";
    top: 0;
    height: 0;
    width: 3px;
    background-color: black;
    left: calc( 10vw + 50px );
    @media(min-width: 768px){
        left: calc( 4vw + 50px );
    }
    @media(min-width: 768px){
            
    }
`;

export { LineLeft };