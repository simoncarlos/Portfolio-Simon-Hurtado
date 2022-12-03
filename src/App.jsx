import { useEffect, useState } from "react";
import Body from "./components/Body/Body";
import LoadingGif from "../src/assets/loading/mondrian-loading.gif"
import { LoaderContainer } from "./components/StyledComponents/Loader/LoaderContainer.Style";
import { LoaderAnimation } from "./components/StyledComponents/Loader/LoaderAnimation.style";
function App() {

  const [loading, setLoading] = useState(true);

  useEffect( () => {

    setTimeout(()=>{
      setLoading(false);
    },5500);

  }, []);

  return (
    <div className="App">

    {
      loading
      ? <LoaderContainer>
        <LoaderAnimation src={ LoadingGif }/>
      </LoaderContainer>
      : 
      <Body/>
    }
      
    </div>
  )
}

export default App;