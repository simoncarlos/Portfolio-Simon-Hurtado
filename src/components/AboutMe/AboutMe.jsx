import { AboutMeContainer } from "../StyledComponents/AboutMe/AboutMeContainer";
import { Title } from "../StyledComponents/Texts/Title.Style";
import { Text } from "../StyledComponents/Texts/Text.Style";
import { Subtitle } from "../StyledComponents/Texts/Subtitle.Style";
import AboutMeProfileContainer from "../AboutMeProfileContainer/AboutMeProfileContainer";
import { Small } from "../StyledComponents/Texts/Small.Style";
import useSkills from "../../utils/useSkills";
import { AboutMeKnowledge } from "../StyledComponents/AboutMe/AboutMeKnowledge";
import { AboutMeKnowledgeContainer } from "../StyledComponents/AboutMe/AboutMeKnowledgeContainer";
import { GoTriangleRight } from "react-icons/go"
import { useTranslation, Trans } from "react-i18next";


const AboutMe = () => {
    const { t } = useTranslation();
    const skills = useSkills();

    return(
        <AboutMeContainer id="aboutMe">
            <div className="aboutMeProfile">
                <article className="aboutMeDescription">
                    <Title>{t("aboutMe.title")}</Title>
                    <Text>
                        <Trans i18nKey="aboutMe.description" components={{ br: <br /> }} />
                    </Text>
                </article>
                <AboutMeProfileContainer></AboutMeProfileContainer>
            </div>
            <div className="knowledge">   
                <Subtitle className="subtitle">{t("aboutMe.skills")}</Subtitle>
                <AboutMeKnowledgeContainer>
                {   
                    skills.map( skill => <AboutMeKnowledge key={ skill.name } important={ skill.important } > <GoTriangleRight /> <img src={skill.image} alt="Imagen de tech"/> <Small size="1.1rem"> { skill.name } </Small> </AboutMeKnowledge> )
                }
                </AboutMeKnowledgeContainer>
            </div>
        </AboutMeContainer>
    );
};

export default AboutMe;
