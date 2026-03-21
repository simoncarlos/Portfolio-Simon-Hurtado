import { ContactContainer } from "../StyledComponents/Contact/ContactContainer";
import { Title } from "../StyledComponents/Texts/Title.Style";
import { Text } from "../StyledComponents/Texts/Text.Style";
import { Button } from "../StyledComponents/Button";
import { RiLinkedinFill } from "react-icons/ri";
import { GrMailOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { useTranslation, Trans } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
    
    return(
        <ContactContainer id="contact">
            <Title>{t("contact.title")}</Title>
            <Text>
            <Trans i18nKey="contact.message" components={{ br: <br /> }} />
            <br />
            <strong>{t("contact.email")}</strong>
            </Text>
            <div className="social-container">
                <div>
                    <Button href="https://www.linkedin.com/in/simon-carlos/" target="_blank" rel="noreferrer">
                            <RiLinkedinFill className="icon linkedin"/>
                    </Button>
                </div>
                <div>
                    <Button href="https://github.com/simoncarlos" target="_blank" rel="noreferrer">
                            <FiGithub className="icon github"></FiGithub>
                    </Button>
                </div>
                <div>
                    <Button href={"mailto:" + t("contact.email")} target="_blank" rel="noreferrer">
                            <GrMailOption className="icon mail"/>
                    </Button>
                </div>
            </div>
        </ContactContainer>
    );
};

export default Contact;