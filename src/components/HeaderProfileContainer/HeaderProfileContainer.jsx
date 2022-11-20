import { HeaderProfile } from "../StyledComponents/HeaderProfile"
import profile from "../../assets/profile/profile.png"

const HeaderProfileContainer = () => {
    return(
        <HeaderProfile>
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
        </HeaderProfile>
    );
};

export default HeaderProfileContainer;