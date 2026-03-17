import { ProyectItemContainer } from "../StyledComponents/Proyects/ProyectItemContainer.Styled";
import { Text } from "../StyledComponents/Texts/Text.Style";
import { Small } from "../StyledComponents/Texts/Small.Style";
import { Button } from "../StyledComponents/Button";
import { ProyectNumber } from "../StyledComponents/Proyects/ProyectNumber.Styled";
import { ProyectTitle } from "../StyledComponents/Proyects/ProyectTitle.Styled";
import { ProyectButtonContainer } from "../StyledComponents/Proyects/ProyectButtonContainer.Styled";
import { useTranslation } from "react-i18next";

const ProyectItem = ({number, name, description, stack, image, color, demo, repo, more}) => {
    const { t } = useTranslation();
    
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
                        {t("proyects.technologies")}: {stack}
                    </Small>
                </div>
                <ProyectButtonContainer>
                    <div>
                        <a href={more} target="_blank" rel="noreferrer">
                            <Button padding="7.5px 15px"><Small size="0.9rem">{t("proyects.knowMore")}</Small></Button>
                        </a>
                    </div>
                    <div>
                        <a href={demo} target="_blank" rel="noreferrer">
                            <Button padding="7.5px 15px"><Small size="0.9rem">{t("proyects.demo")}</Small></Button>
                        </a>
                    </div>
                    <div>
                        <a href={repo} target="_blank" rel="noreferrer">
                            <Button padding="7.5px 15px"><Small size="0.9rem">{t("proyects.repository")}</Small></Button>
                        </a>
                    </div>
                </ProyectButtonContainer>
            </article>
            <img src={image} alt="" />
        </ProyectItemContainer>
    );
};
export default ProyectItem;