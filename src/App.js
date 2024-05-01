import "react-toastify/dist/ReactToastify.css";
import './App.css';
import { ToastContainer, toast } from "react-toastify";
import {useEffect, useLayoutEffect, useState} from "react";

const urlSite = "CA"


function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [width] = useWindowSize();
  const copyUrlSte = () => {
    navigator.clipboard.writeText(urlSite);
    toast("Copied!", {type: "success"})
  }
  useEffect(() => {
    if (width < 850 && !isMobile) {
      setIsMobile(true)
    } else if(width >= 850 && isMobile) {
      setIsMobile(false)
    }
  }, [width, isMobile]);
  return (
    <div className={"App"}>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        closeButton={true}
        pauseOnHover={false}
        theme="dark"
      />
      <div className={`${isMobile ? 'social mobile' : 'social'}`}>
        <a href="https://t.me/pichisolanaportal" target="_blank" rel="noreferrer">
          <img src="iconTg.webp" alt="telegram"/>
        </a>
        <a href="https://twitter.com/pichionsolana" target="_blank" rel="noreferrer">
          <img src="iconX.webp" alt="x"/>
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <img src="iconDex.webp" alt="dex"/>
        </a>
      </div>
      <div className={`${isMobile ? 'pichi mobile' : 'pichi'}`}>
        <h1>$pichi</h1>
        <img src="panda.jpg" alt="panda"/>
        <h2>I'm michi's friend at preschool, i'm shy 👉👈</h2>
        <div className="link">
          <div className="url">{urlSite}</div>
          <button onClick={copyUrlSte}>copy</button>
        </div>
      </div>
      <div className={`${isMobile ? 'memes mobile' : 'memes'}`}>
        <h1>pichi memes</h1>
        <div className="memeBlock">
          <img src="JOKER.jpg" alt="JOKER"/>
          <img src="LUFFY.png" alt="LUFFY"/>
          <img src="NARUTO.png" alt="NARUTO"/>
          <img src="CHIEF.png" alt="CHIEF"/>
        </div>
        <div className="memeBlock">
          <img src="GOKU.png" alt="GOKU"/>
          <img src="MC.jpg" alt="MC"/>
          <img src="PURPLE.jpg" alt="PURPLE"/>
          <img src="CHINESE.png" alt="CHINESE"/>
        </div>
      </div>
    </div>
  );
}

export default App;
