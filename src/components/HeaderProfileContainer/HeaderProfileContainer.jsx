import { HeaderProfile } from "../StyledComponents/HeaderProfile"
import profile from "../../assets/profile/profile.png"

const HeaderProfileContainer = () => {
    return(
        <HeaderProfile>
            <div>
                <div>
                    <img src={profile} alt="Foto de perfil de Diego Simon" />
                </div>    
            </div>
        </HeaderProfile>
    );
};

export default HeaderProfileContainer;