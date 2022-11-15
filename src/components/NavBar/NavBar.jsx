import { useState } from "react";
import { Nav }  from "../StyledComponents/Nav";
import { Logo } from "../StyledComponents/Logo";
import BurgerButton from "../BurgerButton/BurgerButton";
import LogoMondrian from "../../assets/logos/mondrian-d.png"
import { BackgroundNavBarMobile } from "../StyledComponents/BackgroundNavBarMobile";

const NavBar = () => {

    const [activeMenu, setActiveMenu] = useState(false);

    const handleClick = () => {
        setActiveMenu(!activeMenu);
    }

    return (
        <Nav>
            <Logo src={LogoMondrian} alt="Imagen de logo"></Logo>
            <div className={`navLinks ${ activeMenu ? "active" : "" }`}>
                <a href="">Home</a>
                <a href="">Proyect</a>
                <a href="">Experience</a>
                <a href="">Contact</a>
                <a href="">Design</a>
            </div>
            <BurgerButton 
            active={activeMenu}
            handleClick={ handleClick }>
            </BurgerButton>
            <BackgroundNavBarMobile className={ activeMenu ? "active" : "" }>
            </BackgroundNavBarMobile>
        </Nav>
    );
};

export default NavBar;