import { NavigationMobile } from "../StyledComponents/NavBar/NavigationMobile.Style";
import { NavBarLine } from "../StyledComponents/NavBar/NavBarLine.Style";
import LogoMondrian from "../../assets/logos/mondrian-d.png"
import BurgerButton from "../BurgerButton/BurgerButton";
import { Small } from "../StyledComponents/Texts/Small.Style";
import { Logo } from "../StyledComponents/Logo";
import { RiLinkedinFill } from "react-icons/ri";
import { Nav }  from "../StyledComponents/NavBar/Nav.Style";
import { GrMailOption } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { useLayoutEffect } from "react";
import { useState } from "react";
import gsap from "gsap";


const NavBar = () => {

    const [activeMenu, setActiveMenu] = useState(false);

    const handleClick = () => {
        setActiveMenu(!activeMenu);
    }

    useLayoutEffect( () => {

        const ctx = gsap.context( () => {

            let tl = gsap.timeline();
            tl.from(".apeared-logo", {
                opacity: 0,
                position: "absolute",
                delay: 0.5,
                duration: 1
            }).from(".apeared-logo", {
                position: "absolute",
                xPercent:-50, 
                yPercent:-50, 
                left:"50vw",
                top:"50vh",
                duration: 0.5
            }).to(".apeared-logo", {
                position: "static"
            }).to(".apeared-navBarLine", {
                width: "100%",
                duration: 0.5,
                delay: 0.2,
            }).from(".burguerButton", {
                opacity: 0,
                y: -50,
                delay: 0.5,
                duration: 1,
            });

            let tlNavbar = gsap.timeline();

            tlNavbar.from(".navLinks a", {
                position: "relative",
                opacity: 0,
                top:"-500px",
                delay: 2.5,
                duration: 1
            })

        })
        return () => ctx.revert();

    }, []);

    return (
        <Nav>
            <Logo className="apeared-logo" src={ LogoMondrian } alt="Logotipo Mondrian letra D"></Logo>
            <div className="navLinks">
                <a href="#inicio"><Small>Inicio</Small></a>
                <a href="#aboutMe"><Small>Acerca de mi</Small></a>
                <a href=""><Small>Proyectos</Small></a>
                <a href=""><Small>Experiencia</Small></a>
                <a href=""><Small>Contacto</Small></a>
            </div>
            <BurgerButton handleClick={ handleClick } />
            <NavigationMobile className={ activeMenu ? "active" : "" }>
                <div className="nav-links">
                    <a href=""><Small>Inicio</Small></a>
                    <a href=""><Small>Acerca de mi</Small></a>
                    <a href=""><Small>Proyectos</Small></a>
                    <a href=""><Small>Experiencia</Small></a>
                    <a href=""><Small>Contacto</Small></a>
                </div>
                <div className="nav-social">
                    <a href="https://www.linkedin.com/in/simon-carlos/">
                        <RiLinkedinFill className="icon linkedin"></RiLinkedinFill>
                    </a>
                    <a href="https://github.com/simoncarlos">
                        <FiGithub className="icon github"></FiGithub>
                    </a>
                    <a href="mailto:csimonhurtado@gmail.com">
                        <GrMailOption className="icon mail"/>
                    </a>
                </div>
            </NavigationMobile>
            <NavBarLine className="apeared-navBarLine"></NavBarLine>
        </Nav>
    );
};

export default NavBar;