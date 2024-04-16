import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/skills";
import "./App.css"
//import Contact from "./components/Contact/contact";

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
   
    </div>
    
  );
  
}
export default App;
