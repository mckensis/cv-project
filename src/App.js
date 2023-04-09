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
import { useRef, useState } from "react";

function App() {
  const [aboutSectionEnabled, setAboutSectionEnabled] = useState(false);
  const [skillsSectionEnabled, setSkillsSectionEnabled] = useState(false);
  const [projectsSectionEnabled, setProjectsSectionEnabled] = useState(false);
  const [workSectionEnabled, setWorkSectionEnabled] = useState(false);
  const [educationSectionEnabled, setEducationSectionEnabled] = useState(false);
  const mainRef = useRef();

  const ChangeColor = (color) => {
    document.documentElement.style.setProperty('--primary-color', 'red');
  }

  return (
    <div className="App">
      <Header main={mainRef} />
      <main id="main" ref={mainRef}>
        <Personal />

        {/* Buttons to enable various sections */}
        {!aboutSectionEnabled && <button className="add" onClick={() => setAboutSectionEnabled(true)}>Add About Section</button>}
        {!skillsSectionEnabled && <button className="add" onClick={() => setSkillsSectionEnabled(true)}>Add Key Skills Section</button>}
        {!projectsSectionEnabled && <button className="add" onClick={() => setProjectsSectionEnabled(true)}>Add Projects Section</button>}
        {!workSectionEnabled && <button className="add" onClick={() => setWorkSectionEnabled(true)}>Add Work Section</button>}
        {!educationSectionEnabled && <button className="add" onClick={() => setEducationSectionEnabled(true)}>Add Education Section</button>}
        
        {/* Color picker */}
        <label className="visible" htmlFor="primary">Main Color
          <input id="primary" type="color" onChange={(e) => ChangeColor(e.target.value)}/>
        </label>

        {aboutSectionEnabled && <About />}
        {skillsSectionEnabled && <Skills />}
        {projectsSectionEnabled && <Projects />}
        {workSectionEnabled && <Work />}
        {educationSectionEnabled && <Education />}
      </main>
    </div>
  );
}

export default App;
