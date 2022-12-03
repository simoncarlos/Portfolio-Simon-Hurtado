import { useState } from "react";
import { Nav }  from "../StyledComponents/Nav";
//import { Logo } from "../StyledComponents/Logo";
import BurgerButton from "../BurgerButton/BurgerButton";
import LogoMondrian from "../../assets/logos/mondrian-d.png"
import { BackgroundNavBarMobile } from "../StyledComponents/NavBar/BackgroundNavBarMobile";
import { useLayoutEffect } from "react";
import { NavBarLine } from "../StyledComponents/NavBar/NavBarLine";
import gsap from "gsap";
import { Small } from "../StyledComponents/Small";
import { Logo } from "../StyledComponents/Logo";


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
            <Logo className="apeared-logo" src={ LogoMondrian } alt="Imagen de logo"></Logo>
            <div className="navLinks">
                <a href=""><Small>Home</Small></a>
                <a href=""><Small>Proyect</Small></a>
                <a href=""><Small>Experience</Small></a>
                <a href=""><Small>Contact</Small></a>
                <a href=""><Small>Design</Small></a>
            </div>
            <BurgerButton handleClick={ handleClick } />
            <BackgroundNavBarMobile className={ activeMenu ? "active" : "" }>
                <div className="navLinksResponsive">
                    <a href=""><Small>Home</Small></a>
                    <a href=""><Small>Proyect</Small></a>
                    <a href=""><Small>Experience</Small></a>
                    <a href=""><Small>Contact</Small></a>
                    <a href=""><Small>Design</Small></a>
                </div>
            </BackgroundNavBarMobile>
            <NavBarLine className="apeared-navBarLine"></NavBarLine>
        </Nav>
    );
};

export default NavBar;