import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import AboutMe from "../AboutMe/AboutMe";
import Proyects from "../Proyects/Proyects";
import Experience from "../Experience/Experience";

const Body = () => {
    return(
        <>
            <NavBar/>
            <Header></Header>
            <AboutMe></AboutMe>
            <Proyects></Proyects>
            <Experience></Experience>
        </>
    );
};

export default Body;