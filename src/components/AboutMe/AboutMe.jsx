import { AboutMeContainer } from "../StyledComponents/AboutMe/AboutMeContainer";
import { Title } from "../StyledComponents/Title";
import { Text } from "../StyledComponents/Text";
import { Subtitle } from "../StyledComponents/Subtitle";
import AboutMeProfileContainer from "../AboutMeProfileContainer/AboutMeProfileContainer";
import { Small } from "../StyledComponents/Small";

const AboutMe = () => {
    return(
        <AboutMeContainer>
            <article className="aboutMeDescription">
                <Title>Acerca de mi..</Title>
                <Text>
                    ¡Hola! Soy Carlos Diego Simon Hurtado y me encanta diseñar soluciones creativas y simples que resuelvan problematicas completas.
                    Programo desde los 14 años y estudié 3 años de la carrera de Arquitectura en la Universidad de Buenos Aires, la cual me permitió
                    formarme con las bases del diseño grafico. 
                    <br />
                    Despues de la pandemia el club donde entrenaba tenis de mesa requeria un producto distintivo de la competencia y desarrollé desde cero un modulo autoadministrable
                    para inscripcion de torneos con scrapping de datos de los 22mil jugadores del circuito. 
                    <br />
                    Este permitia ver a todos los jugadores los listados de inscriptos, sembrado de zonas y llaves del torneo en tiempo real desde una pagina web.
                    Desde ese entonces es utilizado por diferentes clubes de CABA y el conurbano Bonaerense.
                    <br />
                    {/*<br />
                    Desde ese entonces me concentré en desarrollar soluciones accesibles que generasen experiencias digitales excepcionales para mejorar 
                    organizaciones.*/}
                    <br />
                    Actualmente me encuentro estudiando Ingenieria en Sistemas de Información, la carrera de Desarrollo Web Full Stack en CoderHouse y desarrollando en paralelo diversos proyectos complejos
                    para mejorar mis habilidades tecnicas como un administrador de tareas multiusuario, una aplicacion de chat y un clon de spotify.
                </Text>
                <Subtitle>Lenguajes, Librerias & Frameworks</Subtitle>
                <Small size="1.1rem">React, GSAP, Redux, Node.js, Express, Javascript(ES6), TypeScript, Java, HTML,CSS/SASS, SQL, Visual Basic, C++</Small>
                <Subtitle>Tools & Plataformas</Subtitle>
                <Small size="1.1rem">Amazon Web Services(AWS), Google App Scripts, Git, Firebase, Linux, Webpack, Chart.js, Netlify, Figma, Wordpress, Adobe Photoshop, Adobe Ilustrator</Small>
            </article>
            <AboutMeProfileContainer></AboutMeProfileContainer>
        </AboutMeContainer>
    );
};

export default AboutMe