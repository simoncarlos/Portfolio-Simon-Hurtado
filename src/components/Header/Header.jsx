import { SocialMedia } from "../StyledComponents/Header/SocialMedia.Style";
import { LineBottom } from "../StyledComponents/Header/LineBottom.Style";
import { CubeBottom } from "../StyledComponents/Header/CubeBottom.Style";
import { LineLeft } from "../StyledComponents/Header/LineLeft.Style";
import { HeaderStyled } from "../StyledComponents/Header/Header.Style"; 
import { Subtitle } from "../StyledComponents/Texts/Subtitle.Style";
import { Button } from "../StyledComponents/Button";
import { Title } from "../StyledComponents/Texts/Title.Style";
import { Small } from "../StyledComponents/Texts/Small.Style";
import { Text } from "../StyledComponents/Texts/Text.Style";
import { RiLinkedinFill } from "react-icons/ri";
import { GrMailOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { useLayoutEffect } from "react";
import HeaderAnimation from "../HeaderAnimation/HeaderAnimation";
import gsap from "gsap";

const Header = () => {
    
    useLayoutEffect( () => {

        const ctx = gsap.context( () => {

            let timeLineApear = gsap.timeline();

            timeLineApear.to(".apeared-line-left", {
                height: "50%", 
                delay: 2.7,
                duration: 0.6
            }).from(".linkedin", {
                opacity: 0, 
                y: 80, 
                delay: 0,
                duration: 0.5
            }).from(".github", {
                opacity: 0, 
                y: 80, 
                delay: 0,
                duration: 0.5
            }).from(".mail", {
                opacity: 0, 
                y: 80, 
                delay: 0,
                duration: 0.5
            }).to(".apeared-line-left", {
                height: "100%", 
                delay: 0,
                duration: 0.6
            }).to(".apeared-line-bottom", {
                width: "100%", 
                delay: 0.1,
                duration: 0.6
            });

            let timeLineContent = gsap.timeline();

            timeLineContent.from(".apeared-small", {
                opacity: 0, 
                y: 100, 
                delay: 3.1,
                duration: 0.4
            }).from(".apeared-title", {
                opacity: 0, 
                y: 80, 
                delay: 0,
                duration: 0.4
            }).from(".apeared-subtitle", {
                opacity: 0, 
                y: 80, 
                delay: 0,
                duration: 0.4
            }).from(".apeared-text", {
                opacity: 0, 
                y: 80, 
                delay: 0,
                duration: 0.4
            }).from(".apeared-button", {
                opacity: 0, 
                y: 80, 
                delay: 0,
                duration: 0.4
            });


        })
        return () => ctx.revert();

    }, []);

    return(
        <HeaderStyled>
            <LineLeft className="apeared-line-left"/>
            <SocialMedia>
                <a href="https://www.linkedin.com/in/simon-carlos/">
                    <RiLinkedinFill className="icon linkedin"></RiLinkedinFill>
                </a>
                <a href="https://github.com/simoncarlos">
                    <FiGithub className="icon github"></FiGithub>
                </a>
                <a href="mailto:csimonhurtado@gmail.com">
                    <GrMailOption className="icon mail"></GrMailOption>
                </a>
            </SocialMedia>
            <article className="header-info" >
                <Small className="apeared-small">¡Hola! Mi nombre es</Small>
                <Title className="apeared-title">Carlos Diego Simon Hurtado</Title>
                <Subtitle className="apeared-subtitle" size="1.6rem" >Front-End Software Developer</Subtitle>
                <Text className="apeared-text">
                    Soy estudiante de Ingenieria en Sistemas de Información especializado en el diseño y la construcción
                    de aplicaciones web interactivas con una excepcional experiencia de usuario.
                    Actualmente me encuentro trabajando en
                    multiples proyectos para mejorar mis habilidades tecnicas.
                </Text>
                <Button className="apeared-button">Descargar CV</Button>
            </article>
            <HeaderAnimation></HeaderAnimation>
            <LineBottom className="apeared-line-bottom"></LineBottom>
            <CubeBottom></CubeBottom>
        </HeaderStyled>
    );
};

export default Header;