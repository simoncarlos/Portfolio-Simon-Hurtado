import HeaderProfileContainer from "../HeaderProfileContainer/HeaderProfileContainer";
import { HeaderStyled } from "../StyledComponents/HeaderStyled"; 
import { Button } from "../StyledComponents/Button";
import { Title } from "../StyledComponents/Title";
import { Small } from "../StyledComponents/Small";
import { Text } from "../StyledComponents/Text";
import { useLayoutEffect } from "react";
import gsap from "gsap";

const Header = () => {
    
    useLayoutEffect( () => {

        const ctx = gsap.context( () => {

            let tl = gsap.timeline();
            tl.from(".apeared-small", {
                opacity: 0, 
                y: 100, 
                delay: 5,
                duration: 0.5
            }).from(".apeared-title", {
                opacity: 0, 
                y: 80, 
                delay: 0.2,
                duration: 0.6
            }).from(".apeared-text", {
                opacity: 0, 
                y: 80, 
                delay: 0.2,
                duration: 0.6
            }).from(".apeared-button", {
                opacity: 0, 
                y: 80, 
                delay: 0.2,
                duration: 0.6
            });
            return tl
        })
        return () => ctx.revert();

    }, []);

    return(
        <HeaderStyled>
            <article className="header-info" >
                <Small className="apeared-small">¡Hola! Mi nombre es</Small>
                <Title className="apeared-title">Carlos Diego Simon Hurtado <br/> Front-End Software Developer</Title>
                <Text className="apeared-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo accusantium quisquam laudantium voluptate, 
                    voluptatum dolor dolorum totam atque facilis corporis vitae quos labore inventore neque adipisci quaerat minus beatae. Excepturi?
                </Text>
                <Button className="apeared-button">Descargar CV</Button>
            </article>
            
        </HeaderStyled>
    );
};

export default Header;