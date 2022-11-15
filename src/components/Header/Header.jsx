import { Title } from "../StyledComponents/Title";
import { Small } from "../StyledComponents/Small";
import { Text } from "../StyledComponents/Text";
import NavBar from "../NavBar/NavBar";


const Header = () => {
    return(
        <header>
            <NavBar/>
            <Small size="0.85rem" >¡Hola! Mi nombre es</Small>
            <Title size="2.5rem" >Carlos Diego Simon Hurtado</Title>
            <Title size="2.5rem" >Front-End Software Developer</Title>
            <Text size="0.8rem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nemo accusantium quisquam laudantium voluptate, 
                voluptatum dolor dolorum totam atque facilis corporis vitae quos labore inventore neque adipisci quaerat minus beatae. Excepturi?
            </Text>
        </header>
    );
};

export default Header;