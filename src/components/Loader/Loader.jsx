import { Animation } from "./LoaderStyled";
import LoadingGif from "../../assets/loading/mondrian-loading.gif"

const Loader = () => {
    return(
        <>
            <Animation src={LoadingGif}/>
        </>
    );
};

export default Loader;