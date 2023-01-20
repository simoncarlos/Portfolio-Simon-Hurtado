import { Subtitle } from "../StyledComponents/Texts/Subtitle.Style";
import { ProyectItemContainer } from "../StyledComponents/Proyects/ProyectItemContainer.Styled";
import { Text } from "../StyledComponents/Texts/Text.Style";
import { Small } from "../StyledComponents/Texts/Small.Style";
import { Button } from "../StyledComponents/Button";
import { ImGithub } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FiPlus } from "react-icons/fi";
import { ProyectNumber } from "../StyledComponents/Proyects/ProyectNumber.Styled";
import { ProyectTitle } from "../StyledComponents/Proyects/ProyectTitle.Styled";
import { ProyectButtonContainer } from "../StyledComponents/Proyects/ProyectButtonContainer.Styled";

const ProyectItem = ({number, name, description, stack, image, color}) => {
    return(
        <ProyectItemContainer color={color}>
            <article>
                <ProyectNumber color={color} >0{number+1}</ProyectNumber>
                <ProyectTitle>{name}</ProyectTitle>
                <Text>
                    {description}
                </Text>
                <div className="small-container">
                    <Small size="1.1rem">
                        Technologies: {stack}
                    </Small>
                </div>
                <ProyectButtonContainer>
                    <div>
                        <Button padding="7.5px 15px"><Small size="0.9rem">Conocer mas</Small></Button>
                    </div>
                    <div>
                        <Button padding="7.5px 15px"><Small size="0.9rem">Demo</Small></Button>
                    </div>
                    <div>
                        <Button padding="7.5px 15px"><Small size="0.9rem">Repositorio</Small></Button>
                    </div>
                </ProyectButtonContainer>
            </article>
            <img src={image} alt="" />
        </ProyectItemContainer>
    );
};
export default ProyectItem;