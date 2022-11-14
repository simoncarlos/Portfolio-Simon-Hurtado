import { Title } from "../StyledComponents/Title";
import { Small } from "../StyledComponents/Small";
import { Text } from "../StyledComponents/Text";

const Header = () => {
    return(
        <header>
            <Small size="1.2rem" >¡Hola! Yo soy..</Small>
            <Title size="3rem" >Carlos Diego Simon Hurtado</Title>
            <Text size="0.8rem">
                Soy Front-End React Developer, tengo 24 años y vivo en buenos Aires
            </Text>
        </header>
    );
};

export default Header;