import { ExperienceContainer } from "../StyledComponents/Experience/ExperienceContainer";
import { Title } from "../StyledComponents/Texts/Title.Style";
import ExperienceList from "../ExperienceList/ExperienceList";
import { experience } from "../../utils/experience";


const Experience = ( ) => {
    return(
        <ExperienceContainer id="experience">
            <Title>Experiencia</Title>
            <ExperienceList data={experience} />
        </ExperienceContainer>
    );
};

export default Experience;