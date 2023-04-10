import About from "./about/About";
import Education from "./education/Education";
import Personal from "./personal/Personal";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Work from "./work/Work";
import { useState } from "react";

const MainComponent = () => {
  // States for controlling visibility of sections or a button to show the section
  const [aboutSectionEnabled, setAboutSectionEnabled] = useState(true);
  const [skillsSectionEnabled, setSkillsSectionEnabled] = useState(true);
  const [projectsSectionEnabled, setProjectsSectionEnabled] = useState(true);
  const [workSectionEnabled, setWorkSectionEnabled] = useState(true);
  const [educationSectionEnabled, setEducationSectionEnabled] = useState(true);

  return (
    <main id="main">
      <Personal />

      {/* Buttons to enable various sections */}
      {!aboutSectionEnabled && <button className="add" onClick={() => setAboutSectionEnabled(true)}>Add About Section</button>}
      {!skillsSectionEnabled && <button className="add" onClick={() => setSkillsSectionEnabled(true)}>Add Key Skills Section</button>}
      {!projectsSectionEnabled && <button className="add" onClick={() => setProjectsSectionEnabled(true)}>Add Projects Section</button>}
      {!workSectionEnabled && <button className="add" onClick={() => setWorkSectionEnabled(true)}>Add Work Section</button>}
      {!educationSectionEnabled && <button className="add" onClick={() => setEducationSectionEnabled(true)}>Add Education Section</button>}

      {aboutSectionEnabled &&
        <About setAboutSectionEnabled={setAboutSectionEnabled} />}

      {skillsSectionEnabled &&
        <Skills setSkillsSectionEnabled={setSkillsSectionEnabled} />}
      
      {projectsSectionEnabled &&
        <Projects setProjectsSectionEnabled={setProjectsSectionEnabled} />}
  
      {workSectionEnabled &&
        <Work setWorkSectionEnabled={setWorkSectionEnabled} />}
      
      {educationSectionEnabled &&
        <Education setEducationSectionEnabled={setEducationSectionEnabled} />}
    </main>
  )
}

export default MainComponent;