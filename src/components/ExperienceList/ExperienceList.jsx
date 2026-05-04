import ExperienceItem from "../ExperienceItem/ExperienceItem";
import { ExperienceListContainer } from "../StyledComponents/Experience/ExperienceListContainer";

const ExperienceList = ( {data} ) => {
    return(
        <ExperienceListContainer>
            {
                (data || []).map( experience => {
                    return <ExperienceItem
                        key={experience.id}
                        title={experience.name}
                        company={experience.company}
                        date={experience.date}
                        description={experience.description}
                        color={experience.bgcolor}
                    />
                })
            }
        </ExperienceListContainer>
    );
};

export default ExperienceList;