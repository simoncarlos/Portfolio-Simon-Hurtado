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
import mockup from "../../assets/mockups/sait-computer.png";

const ProyectItem = () => {

    return(
        <ProyectItemContainer>
            <article>
                <ProyectNumber>01</ProyectNumber>
                <ProyectTitle>Hideki Task</ProyectTitle>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium facilis similique deserunt, eligendi cum est quaerat. Iure aperiam assumenda.
                </Text>
                <div className="small-container">
                    <Small size="1.1rem">
                        Tecnologias: React, Typescript, Tailwind CSS, Vite.
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
            <img src={mockup} alt="" />
        </ProyectItemContainer>
    );
};
export default ProyectItem;