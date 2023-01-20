import styled from "styled-components";

export const ProyectItemContainer = styled.div`
    height: 85vh;
    border-top: 3px solid black;
    padding: 0 8%;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    align-items: start;
    justify-content: space-evenly;
    &::after{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 25%;
        height: 100%;
        background-color: rgb(${ props => props.color || "0,0,0" }) ;
        border-left: 3px solid black;
        z-index: 0;
    }
    > * {
        z-index: 1;
    }
    article{
        width: 100%;
    }
    article p, article .small-container{
        width: 75%;
        margin: 0 0 20px 0;
    }
    img{
        width: 100%;
    }
    @media(min-width: 768px){
        height: 65vh;
        img{
            width: 60%;
        }
    }
    @media(min-width: 1024px){
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 15%;
        article{
            width: 65%;
        }
        article > *{
            width: 100%;
        }
        img{
            width: 40%;
        }
    }
`;