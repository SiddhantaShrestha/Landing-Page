import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Feature from "./Components/Feature";
import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import aboutImage from "./images/about.png";
import aboutImage1 from "./images/download.png";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Feature></Feature>
      <About
        image={aboutImage}
        title="Comes with All You Need for Daily Life"
        button="Get The App"
      ></About>
      <Presentation></Presentation>
      <About
        image={aboutImage1}
        title="Download And Get The APP Now"
        button="Download"
      ></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
