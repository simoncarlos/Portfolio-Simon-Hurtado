const ExperienceItem = ({ title, company, date, description }) => {
    return(
        <div>
            <p>{title}</p>
            <p>{company}</p>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    );
};

export default ExperienceItem;