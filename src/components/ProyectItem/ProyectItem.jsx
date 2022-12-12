import { Subtitle } from "../StyledComponents/Texts/Subtitle.Style";
import { ProyectItemContainer } from "../StyledComponents/Proyects/ProyectsItemContainer.Styled";
import { ProyectDescription } from "../StyledComponents/Proyects/ProyectDescription.Styled";
import { Text } from "../StyledComponents/Texts/Text.Style";
import { Small } from "../StyledComponents/Texts/Small.Style";
import { Button } from "../StyledComponents/Button";
import ProyectFrame from "../ProyectFrame/ProyectFrame";
import { ProyectButtonContainer } from "../StyledComponents/Proyects/ProyectButtonContainer.Styled";

const ProyectItem = ( { align } ) => {
    return(
        <ProyectItemContainer align={ align } >
            <ProyectFrame align={ align == "left" ? "right: 0;" : "left: 0;"} />
            <ProyectDescription>
                <Subtitle>Proyecto nro ..</Subtitle>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit commodi modi, culpa enim aspernatur quisquam et velit aperiam exercitationem pariatur voluptatum beatae. Qui, saepe possimus obcaecati facilis praesentium iure magni!
                </Text>
                <Small size="1rem" >Tecnologias: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Small>
                <ProyectButtonContainer>
                    <Button>Ver Demo</Button>
                    <Button>Ver Repositorio</Button>
                </ProyectButtonContainer>
            </ProyectDescription>
        </ProyectItemContainer>
    );
};
export default ProyectItem;