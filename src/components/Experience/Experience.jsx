import { ExperienceContainer } from "../StyledComponents/Experience/ExperienceContainer";
import { Title } from "../StyledComponents/Texts/Title.Style";
import ExperienceList from "../ExperienceList/ExperienceList";
import useTranslatedData from "../../utils/useTranslatedData";
import { useTranslation } from "react-i18next";


const Experience = () => {
    const { t } = useTranslation();
    const { experience } = useTranslatedData();
    
    return(
        <ExperienceContainer id="experience">
            <Title>{t("experience.title")}</Title>
            <ExperienceList data={experience} />
        </ExperienceContainer>
    );
};

export default Experience;