import "react-toastify/dist/ReactToastify.css";
import './App.css';
import { ToastContainer, toast } from "react-toastify";

const urlSite = "Soon"

function App() {
  const copyUrlSte = () => {
    navigator.clipboard.writeText(urlSite);
    toast("Copied!", {type: "success"})
  }
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        closeButton={true}
        pauseOnHover={false}
        theme="dark"
      />
      <div className="social">
        <a href="/" target="_blank">
          <img src="iconTg.webp" alt="telegram"/>
        </a>
        <a href="/" target="_blank">
          <img src="iconX.webp" alt="x"/>
        </a>
        <a href="/" target="_blank">
          <img src="iconDex.webp" alt="dex"/>
        </a>
      </div>
      <div className="pichi">
        <h1>$pichi</h1>
        <img src="panda.jpg" alt="panda"/>
        <h2>I'm michi's friend at preschool, i'm shy 👉👈</h2>
        <div className="link">
          <div className="url">{urlSite}</div>
          <button onClick={copyUrlSte}>copy</button>
        </div>
      </div>
      <div className="memes">
        <h1>pichi memes</h1>
        <div>
          <img src="JOKER.jpg" alt="JOKER"/>
          <img src="LUFFY.png" alt="LUFFY"/>
          <img src="NARUTO.png" alt="NARUTO"/>
          <img src="CHIEF.png" alt="CHIEF"/>
        </div>
        <div>
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
