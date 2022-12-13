import styled from "styled-components";

export const ProyectButtonContainer = styled.div`
    margin: 40px 0 10px;
    a{
        z-index: 0;
        margin-right: 20px;
        &::after{
            z-index: -1;
        }
    }
    @media(min-width: 768px){        
        padding-right: 20px;
        justify-content: start;
        * {
            
        }
    }
`;