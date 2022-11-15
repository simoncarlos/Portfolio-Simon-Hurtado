import { BurgerButtonContainer } from "../StyledComponents/BurgerButtonContainer"

const BurgerButton = ( props ) => {
    return(
        <BurgerButtonContainer className="burguerButton" onClick={props.handleClick}  >
            <span></span>
            <span></span>
            <span></span>
        </BurgerButtonContainer>
    );
};

export default BurgerButton;