import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import AboutMe from "../AboutMe/AboutMe";

const Body = () => {
    return(
        <div>
            <NavBar/>
            <Header></Header>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Body;