import { ProyectFrontFrame } from "../StyledComponents/Proyects/ProyectFrontFrame.Styled";
import Captures from "../../assets/captures/ProyectPhoto.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const ProyectFrame = ( { align } ) => {

    useEffect( () => {

        gsap.fromTo( ".proyect-frame", {
            x: "100vw",
            opacity: 0
        },
        {
            x: 0,
            opacity: 1, 
            duration: 1.5,
            scrollTrigger: {
                trigger: ".proyect-frame",
                start: "top 70%",
                markers: true
            }
        })

    }, []);

    return(
        <ProyectFrontFrame align={ align } className="proyect-frame">
            <div>
                <img src={Captures} alt="" />
            </div>
        </ProyectFrontFrame>
    );
};

export default ProyectFrame;