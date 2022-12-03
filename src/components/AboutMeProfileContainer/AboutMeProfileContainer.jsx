import { AboutMeProfile } from "../StyledComponents/AboutMe/AboutMeProfile"
import profile from "../../assets/profile/profile.png"

const AboutMeProfileContainer = () => {
    return(
        <AboutMeProfile>
            <div>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <div>
                        <img src={profile} alt="Foto de perfil de Diego Simon" />
                    </div>
                </div>    
            </div>
            <article className="animation"></article>
        </AboutMeProfile>
    );
};

export default AboutMeProfileContainer;