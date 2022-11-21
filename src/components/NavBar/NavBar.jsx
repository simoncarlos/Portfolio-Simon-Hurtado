import { useState } from "react";
import { Nav }  from "../StyledComponents/Nav";
import { Logo } from "../StyledComponents/Logo";
import BurgerButton from "../BurgerButton/BurgerButton";
import LogoMondrian from "../../assets/logos/mondrian-d.png"
import { BackgroundNavBarMobile } from "../StyledComponents/BackgroundNavBarMobile";
import { useLayoutEffect } from "react";
import { NavBarLine } from "../StyledComponents/NavBarLine";
import gsap from "gsap";

const NavBar = () => {

    //const [activeMenu, setActiveMenu] = useState(false);
//
    //const handleClick = () => {
    //    setActiveMenu(!activeMenu);
    //}
    useLayoutEffect( () => {

        const ctx = gsap.context( () => {

            let tl = gsap.timeline();
            tl.from(".apeared-logo", {
                opacity: 0,
                delay: 0.5,
                duration: 1
            }).from(".apeared-logo", {
                xPercent:-50, 
                yPercent:-50, 
                left:"50%",
                top:"50%",
                delay: 0.5,
                duration: 0.5
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
            return tl
        })
        return () => ctx.revert();

    }, []);

    return (
        <Nav>
            <Logo className="apeared-logo" src={LogoMondrian} alt="Imagen de logo"></Logo>
            {/*<div className={`navLinks`}>
                <a href="">Home</a>
                <a href="">Proyect</a>
                <a href="">Experience</a>
                <a href="">Contact</a>
                <a href="">Design</a>
            </div>
            active={activeMenu}
            handleClick={ handleClick }>
            */}
            <div></div>
            <BurgerButton>
            </BurgerButton>
            {/*<BackgroundNavBarMobile className={ activeMenu ? "active" : "" }>
                <div className="navLinksResponsive">
                    <a href="">Home</a>
                    <a href="">Proyect</a>
                    <a href="">Experience</a>
                    <a href="">Contact</a>
                    <a href="">Design</a>
                </div>
            </BackgroundNavBarMobile>*/}
            <NavBarLine className="apeared-navBarLine"></NavBarLine>
        </Nav>
    );
};

export default NavBar;