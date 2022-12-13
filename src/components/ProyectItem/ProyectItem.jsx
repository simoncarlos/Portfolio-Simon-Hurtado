import { Subtitle } from "../StyledComponents/Texts/Subtitle.Style";
import { ProyectItemContainer } from "../StyledComponents/Proyects/ProyectsItemContainer.Styled";
import { ProyectDescription } from "../StyledComponents/Proyects/ProyectDescription.Styled";
import { Text } from "../StyledComponents/Texts/Text.Style";
import { Small } from "../StyledComponents/Texts/Small.Style";
import { Button } from "../StyledComponents/Button";
import ProyectFrame from "../ProyectFrame/ProyectFrame";
import { ProyectButtonContainer } from "../StyledComponents/Proyects/ProyectButtonContainer.Styled";
import { ImGithub } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FiPlus } from "react-icons/fi";

const ProyectItem = ( { align } ) => {

    return(
        <ProyectItemContainer align={ align } className="proyect-item">
            <ProyectFrame align={ align == "left" ? "right: 0;" : "left: 0;"}>
            </ProyectFrame>
            <ProyectDescription className="proyect-description">
                <Subtitle>Proyecto nro ..</Subtitle>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit commodi modi, culpa enim aspernatur quisquam et velit aperiam exercitationem pariatur voluptatum beatae. Qui, saepe possimus obcaecati facilis praesentium iure magni!
                </Text>
                <Small size="1rem" >Tecnologias: xxxxxxxx xxxxxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx</Small>
                <ProyectButtonContainer>
                    <Button size="2rem" padding="10px 20px 5px 20px" ><FcGoogle/></Button>
                    <Button size="2rem" padding="10px 20px 5px 20px" ><ImGithub/></Button>
                    <Button size="2rem" padding="10px 20px 5px 20px" ><FiPlus/></Button>
                </ProyectButtonContainer>
            </ProyectDescription>
        </ProyectItemContainer>
    );
};
export default ProyectItem;