import { ProyectsContainer } from "../StyledComponents/Proyects/ProyectsContainer.Styled";
import { Title } from "../StyledComponents/Texts/Title.Style";
import ProyectItem from "../ProyectItem/ProyectItem";
import { proyects } from "../../utils/proyects.js";

const Proyects = () => {
    return(
        <ProyectsContainer>
            <Title className="center-title"> Proyectos.. </Title>
            
            {
                proyects.map( (proyectItem, index) => { 
                    return <ProyectItem 
                    key={index}
                    number={index}
                    name={proyectItem.name}
                    description={proyectItem.description}
                    stack={proyectItem.technologies}
                    image={proyectItem.mockup}
                    color={proyectItem.color}
                    />                    
                })
            }
        </ProyectsContainer>
    );
};
export default Proyects;