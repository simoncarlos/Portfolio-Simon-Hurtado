import { useEffect, useState } from "react"
import LoaderContainer from "./components/LoaderContainer/LoaderContainer";
import Body from "./components/Body/Body"

function App() {

  const [loading, setLoading] = useState(true);

  useEffect( () => {

    setTimeout(()=>{
      setLoading(false);
    },5950);

  }, []);

  return (
    <div className="App">
    {
      loading
      ? <LoaderContainer/>
      : <Body/>
    }
      
    </div>
  )
}

export default App
