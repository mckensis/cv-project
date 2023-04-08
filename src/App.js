import About from "./views/About";
import Education from "./views/education/Education";
import Header from "./views/Header";
import Personal from "./views/Personal";
import Projects from "./views/projects/Projects";
import Skills from "./views/Skills";
import Work from "./views/work/Work";
import './stylesheets/base.css';
import './stylesheets/About.css';
import './stylesheets/Education.css';
import './stylesheets/Personal.css';
import './stylesheets/Projects.css';
import './stylesheets/Skills.css';
import './stylesheets/Work.css';
import './stylesheets/Print.css';
import { useRef } from "react";

function App() {
  const mainRef = useRef();
  
  return (
    <div className="App">
      <Header main={mainRef} />
      <main id="main" ref={mainRef}>
        <Personal />
        <About />
        <Skills />
        <Projects />
        <Work />
        <Education />
      </main>
    </div>
  );
}

export default App;
