import { AboutMeContainer } from "../StyledComponents/AboutMe/AboutMeContainer";
import { Title } from "../StyledComponents/Texts/Title.Style";
import { Text } from "../StyledComponents/Texts/Text.Style";
import { Subtitle } from "../StyledComponents/Texts/Subtitle.Style";
import AboutMeProfileContainer from "../AboutMeProfileContainer/AboutMeProfileContainer";
import { Small } from "../StyledComponents/Texts/Small.Style";
import { skills } from "../../utils/skills";
import { AboutMeKnowledge } from "../StyledComponents/AboutMe/AboutMeKnowledge";
import { AboutMeKnowledgeContainer } from "../StyledComponents/AboutMe/AboutMeKnowledgeContainer";
import { GoTriangleRight } from "react-icons/go"


const AboutMe = () => {

    return(
        <AboutMeContainer id="aboutMe">
            <div className="aboutMeProfile">
                <article className="aboutMeDescription">
                    <Title>Acerca de mi..</Title>
                    <Text>
                        ¡Hola! Soy Carlos Diego Simon Hurtado y me encanta diseñar soluciones creativas y simples que resuelvan problematicas completas.
                        Estudié durante 3 años la carrera de Arquitectura en la Universidad de Buenos Aires, la cual me permitió
                        formarme con las bases del diseño grafico y desarrollar la capacidad de razonamiento abstracto. 
                        <br />
                        Despues de la cuarentena por el covid-19 el club donde entrenaba tenis de mesa requeria un producto distintivo de la competencia y desarrollé desde cero un modulo autoadministrable
                        para inscripcion de torneos que permitia ver a todos los jugadores los listados de inscriptos, sembrado de zonas y llaves del torneo en tiempo real desde una pagina web.
                        Desde ese entonces es utilizado y comercializado en diferentes clubes de CABA y el conurbano Bonaerense.
                        <br />
                        <br />
                        Actualmente me encuentro estudiando Ingenieria en Sistemas de Información, terminando la certificación de Desarrollo Web Full Stack en CoderHouse y desarrollando diversos proyectos complejos
                        para mejorar mis habilidades tecnicas en busca de superarme dia a dia.
                    </Text>
                </article>
                <AboutMeProfileContainer></AboutMeProfileContainer>
            </div>
            <div className="knowledge">   
                <Subtitle className="subtitle">Lenguajes, Librerias, Frameworks & Tools</Subtitle>
                <AboutMeKnowledgeContainer>
                {   
                    skills.map( skill => <AboutMeKnowledge key={ skill.name } important={ skill.important } > <GoTriangleRight /> <Small size="1.1rem"> { skill.name } </Small> </AboutMeKnowledge> )
                }
                </AboutMeKnowledgeContainer>
            </div>
        </AboutMeContainer>
    );
};

export default AboutMe