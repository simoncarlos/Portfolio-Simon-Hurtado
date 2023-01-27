import { ContactContainer } from "../StyledComponents/Contact/ContactContainer";
import { Title } from "../StyledComponents/Texts/Title.Style";
import { Text } from "../StyledComponents/Texts/Text.Style";
import { Button } from "../StyledComponents/Button";
import { RiLinkedinFill } from "react-icons/ri";
import { GrMailOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";

const Contact = () => {
    return(
        <ContactContainer id="contact">
            <Title>Contacto</Title>
            <Text>
            👉 Si estas en búsqueda de un Frontend Developer con amplio conocimiento tanto de Back End como de diseño y sus implementaciones en el desarrollo web entonces te invito a contactarme por mis redes sociales o a través de mi mail csimonhurtado@gmail.com
            </Text>
            <div className="social-container">
                <a href="https://www.linkedin.com/in/simon-carlos/" target="_blank">
                    <Button>
                            <RiLinkedinFill className="icon linkedin"/>
                    </Button>
                </a>
                <a href="https://github.com/simoncarlos" target="_blank">
                    <Button>
                            <FiGithub className="icon github"></FiGithub>
                    </Button>
                </a>
                <a href="mailto:csimonhurtado@gmail.com" target="_blank">
                    <Button>
                            <GrMailOption className="icon mail"/>
                    </Button>
                </a>
            </div>
        </ContactContainer>
    );
};

export default Contact;
// Mail Linkedin Github 