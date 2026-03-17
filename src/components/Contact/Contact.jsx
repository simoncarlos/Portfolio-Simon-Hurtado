import { ContactContainer } from "../StyledComponents/Contact/ContactContainer";
import { Title } from "../StyledComponents/Texts/Title.Style";
import { Text } from "../StyledComponents/Texts/Text.Style";
import { Button } from "../StyledComponents/Button";
import { RiLinkedinFill } from "react-icons/ri";
import { GrMailOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
    
    return(
        <ContactContainer id="contact">
            <Title>{t("contact.title")}</Title>
            <Text>
            {t("contact.message")} {t("contact.email")}
            </Text>
            <div className="social-container">
                <a href="https://www.linkedin.com/in/simon-carlos/" target="_blank" rel="noreferrer">
                    <Button>
                            <RiLinkedinFill className="icon linkedin"/>
                    </Button>
                </a>
                <a href="https://github.com/simoncarlos" target="_blank" rel="noreferrer">
                    <Button>
                            <FiGithub className="icon github"></FiGithub>
                    </Button>
                </a>
                <a href={"mailto:" + t("contact.email")} target="_blank" rel="noreferrer">
                    <Button>
                            <GrMailOption className="icon mail"/>
                    </Button>
                </a>
            </div>
        </ContactContainer>
    );
};

export default Contact;