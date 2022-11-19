import styled from "styled-components"

const BurgerButtonContainer = styled.div`
    
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    height: 15px;
    width: 20px;
    span{
        height: 18%;
        background-color: black;
        &:nth-child(0n+1){
            width: 100%;
        }
        &:nth-child(0n+2){
            width: 50%;
        }
        &:nth-child(0n+3){
            width: 75%;
        }
    }    
`;

export { BurgerButtonContainer };