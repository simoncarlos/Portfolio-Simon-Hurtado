import HeaderProfileContainer from "../HeaderProfileContainer/HeaderProfileContainer";
import { HeaderStyled } from "../StyledComponents/HeaderStyled"; 
import { Button } from "../StyledComponents/Button";
import { Title } from "../StyledComponents/Title";
import { Small } from "../StyledComponents/Small";
import { Text } from "../StyledComponents/Text";

const Header = () => {
    return(
        <HeaderStyled>
            <article className="header-info">
                <Small>¡Hola! Mi nombre es</Small>
                <Title>Carlos Diego Simon Hurtado</Title>
                <Title>Front-End Software Developer</Title>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo accusantium quisquam laudantium voluptate, 
                    voluptatum dolor dolorum totam atque facilis corporis vitae quos labore inventore neque adipisci quaerat minus beatae. Excepturi?
                </Text>
                <Button>Descargar CV</Button>
            </article>
            
        </HeaderStyled>
    );
};

export default Header;