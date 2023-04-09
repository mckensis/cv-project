import About from "./about/About";
import Education from "./education/Education";
import Personal from "./personal/Personal";
import Projects from "./projects/Projects";
import Skills from "./Skills";
import Work from "./work/Work";
import { useState } from "react";

const MainComponent = () => {

  // States for controlling visibility of sections or a button to show the section
  const [aboutSectionEnabled, setAboutSectionEnabled] = useState(false);
  const [skillsSectionEnabled, setSkillsSectionEnabled] = useState(false);
  const [projectsSectionEnabled, setProjectsSectionEnabled] = useState(false);
  const [workSectionEnabled, setWorkSectionEnabled] = useState(false);
  const [educationSectionEnabled, setEducationSectionEnabled] = useState(false);

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
        <Projects />}
  
      {workSectionEnabled &&
        <Work />}
      
      {educationSectionEnabled &&
        <Education />}
    </main>
  )




  return (
    <div>MainComponent</div>
  )
}

export default MainComponent;