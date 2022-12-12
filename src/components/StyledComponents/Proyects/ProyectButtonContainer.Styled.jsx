import styled from "styled-components";

export const ProyectButtonContainer = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    a{
        z-index: 0;
    }
    a:after{
        z-index: -1;
    }
    @media(min-width: 768px){        
        padding-right: 20px;
        justify-content: start;
        * {
            margin-right: 20px;
        }
    }
`;