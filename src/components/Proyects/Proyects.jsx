import { ProyectsContainer } from "../StyledComponents/Proyects/ProyectsContainer.Styled";
import { Title } from "../StyledComponents/Texts/Title.Style";
import ProyectItem from "../ProyectItem/ProyectItem";

const Proyects = () => {
    return(
        <ProyectsContainer>
            <Title> Proyectos.. </Title>
            <ProyectItem/>
            <ProyectItem/>
            <ProyectItem/>
        </ProyectsContainer>
    );
};
export default Proyects;