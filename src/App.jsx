import { useEffect, useState } from "react";
import LoaderContainer from "./components/LoaderContainer/LoaderContainer";
import Body from "./components/Body/Body";
import { gsap, CSSPlugin, Expo } from "gsap";
import styled from "styled-components";
gsap.registerPlugin(CSSPlugin);

function App() {

  const [counter, setCounter] = useState(0);

  useEffect( () => {
    const count = setInterval( () => {
      
      setCounter( (counter) => {
        counter<100 ? counter + 1 : clearInterval(count),setCounter(100), reveal()
      })
      
    }, 25);
  });
  
  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".follow-yellow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 0.12,
      delay: 0.8,
    })
      .to(".hide", { opacity: 0, duration: 2 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".follow-red", {
        width: "100%",
        ease: Expo.easeInOut,
        duration: 0.12,
        delay: 0.8,
      })
        .to(".follow-yellow", { opacity: 0, duration: 2 })
        .to(".follow-yellow", { display: "none", duration: 0.3 })
        .to(".follow-light", {
          width: "100%",
          ease: Expo.easeInOut,
          duration: 0.12,
          delay: 0.8,
        })
          .to(".follow-red", { opacity: 0, duration: 2 })
          .to(".follow-red", { display: "none", duration: 0.3 })
          .to(".follow-light", {
            height: "100%",
            ease: Expo.easeInOut,
            duration: 0.2,
            delay: 1.5,
          })
    setLoading(false);
  };


  const [loading, setLoading] = useState(true);

  useEffect( () => {

    setTimeout(()=>{
      setLoading(false);
    },5950);

  }, []);

  return (
    <div className="App">

      <Loading>

        <Follow className="follow-red" color="#de2d27"></Follow>
        <Follow className="follow-blue" color="#232b69"></Follow>
        <Follow className="follow-light" color="#fcfcf4"></Follow>
        <ProgressBar className="hide" style={{ width: counter + "%" }} ></ProgressBar>

      </Loading>
    {
      //loading
      //? <LoaderContainer/>
      //: 
      //<Body/>
    }
      
    </div>
  )
}

export default App

const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 1;
`;
const Follow = styled.div`
  position: absolute;
  background-color: ${ props => props.color };
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;