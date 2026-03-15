import { ProyectsContainer } from "../StyledComponents/Proyects/ProyectsContainer.Styled";
import { Title } from "../StyledComponents/Texts/Title.Style";
import ProyectItem from "../ProyectItem/ProyectItem";
import useTranslatedData from "../../utils/useTranslatedData";
import { useTranslation } from "react-i18next";

const Proyects = () => {
    const { t } = useTranslation();
    const { proyects } = useTranslatedData();
    
    return(
        <ProyectsContainer id="proyects">
            <Title className="center-title">{t("proyects.title")}</Title>
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
                    demo={proyectItem.demo}
                    repo={proyectItem.repositorio}
                    more={proyectItem.more}
                    />                    
                })
            }
        </ProyectsContainer>
    );
};
export default Proyects;