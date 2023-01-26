import { ExperienceItemContainer } from "../StyledComponents/Experience/ExperienceItemContainer";
import { ExperienceTitle } from "../StyledComponents/Experience/ExperienceTtitle";
import { Small } from "../StyledComponents/Texts/Small.Style"
import { Text } from  "../StyledComponents/Texts/Text.Style"
import AboutMeProfileContainer from "../AboutMeProfileContainer/AboutMeProfileContainer"
const ExperienceItem = ({ title, company, date, description, color }) => {
    return(
        <ExperienceItemContainer color={color}>
            <div className="experience-content">
                <div className="experience-header">
                    <ExperienceTitle>{title}</ExperienceTitle>
                    <Small size="1.1rem">{company}</Small>
                </div>
                <Text size="1.1rem">{date}</Text>
                <Text size="1rem">{description}</Text>
            </div>
            <article className="animation"></article>
        </ExperienceItemContainer>
    );
};

export default ExperienceItem;