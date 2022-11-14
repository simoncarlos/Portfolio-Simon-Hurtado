import Loader from "../Loader/Loader";
import { Container } from "./LoaderContainerStyled";

const LoaderContainer = () => {
    return (
        <Container>
            <Loader></Loader>
        </Container>
    );
};

export default LoaderContainer;