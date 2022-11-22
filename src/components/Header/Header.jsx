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
                    Soy estudiante de Ingenieria en Sistemas de Información especializado en el diseño y la construcción
                    de aplicaciones web interactivas con una excepcional experiencia de usuario.
                    Actualmente desarrollo soluciones creativas para clientes de manera autonoma y me encuentro trabajando en
                    multiples proyectos para mejorar mis habilidades tecnicas.
                </Text>
                <Button className="apeared-button">Descargar CV</Button>
            </article>
        </HeaderStyled>
    );
};

export default Header;