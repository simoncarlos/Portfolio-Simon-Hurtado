import ExperienceItem from "../ExperienceItem/ExperienceItem";

const ExperienceList = ( {data} ) => {
    return(
        <div>
            {
                data.map( experience => {
                    return <ExperienceItem
                        title={experience.name}
                        company={experience.company}
                        date={experience.date}
                        description={experience.description}
                    />
                })
            }
        </div>
    );
};

export default ExperienceList;