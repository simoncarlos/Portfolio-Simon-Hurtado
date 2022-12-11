import { Subtitle } from "../StyledComponents/Texts/Subtitle.Style";
import { ProyectItemContainer } from "../StyledComponents/Proyects/ProyectsItemContainer.Styled";
import { ProyectDescription } from "../StyledComponents/Proyects/ProyectDescription.Styled";
import { Text } from "../StyledComponents/Texts/Text.Style";
import { Small } from "../StyledComponents/Texts/Small.Style";
import { Button } from "../StyledComponents/Button";
import ProyectFront from "../ProyectFront/ProyectFront";

const ProyectItem = () => {
    return(
        <ProyectItemContainer>
            <ProyectFront/>
            <ProyectDescription>
                <Subtitle>Proyecto nro ..</Subtitle>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit commodi modi, culpa enim aspernatur quisquam et velit aperiam exercitationem pariatur voluptatum beatae. Qui, saepe possimus obcaecati facilis praesentium iure magni!
                </Text>
                <Small size="1rem" >Tecnologias: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Small>
                <Button>Ver Demo</Button>
                <Button>Ver Repositorio</Button>
            </ProyectDescription>
        </ProyectItemContainer>
    );
};
export default ProyectItem;