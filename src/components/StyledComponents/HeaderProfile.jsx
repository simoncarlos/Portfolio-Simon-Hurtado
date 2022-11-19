import styled from "styled-components";

const HeaderProfile = styled.div`
    padding: 5%;
    width: 40%;
    height: 80%;
    border: 3px solid blue;
    div{
        width: 100%;
        height: 100%;
        border: 3px solid red;
        overflow: hidden;
        img{
            width: 100%;
            object-fit: cover;
        }
    }
`;

export { HeaderProfile }