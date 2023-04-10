import About from "./about/About";
import Education from "./education/Education";
import Personal from "./personal/Personal";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Work from "./work/Work";
import { useState } from "react";

const MainComponent = () => {
  // States for controlling visibility of sections or a button to show the section
  const [preferences, setPreferences] = useState(
    JSON.parse(localStorage.getItem('preferences')) || {
    about: true,
    skills: true,
    projects: true,
    work: true,
    education: true
  });

  const updatePreferences = (option) => {
    const newPref = JSON.parse(localStorage.getItem("preferences")) || preferences;
    newPref[option] = !newPref[option];
    setPreferences({...newPref});
    localStorage.setItem('preferences', JSON.stringify(newPref));
  }

  return (
    <main id="main">
      <Personal />

      {/* Buttons to enable various sections */}
      {!preferences["about"] && <button className="add" onClick={() => updatePreferences("about")}>Add About Section</button>}
      {!preferences["skills"] && <button className="add" onClick={() => updatePreferences("skills")}>Add Key Skills Section</button>}
      {!preferences["projects"] && <button className="add" onClick={() => updatePreferences("projects")}>Add Projects Section</button>}
      {!preferences["work"] && <button className="add" onClick={() => updatePreferences("work")}>Add Work Section</button>}
      {!preferences["education"] && <button className="add" onClick={() => updatePreferences("education")}>Add Education Section</button>}

      {preferences["about"] &&
        <About updatePreferences={updatePreferences} />}

      {preferences["skills"] &&
        <Skills updatePreferences={updatePreferences} />}
      
      {preferences["projects"] &&
        <Projects updatePreferences={updatePreferences} />}
  
      {preferences["work"] &&
        <Work updatePreferences={updatePreferences} />}
      
      {preferences["education"] &&
        <Education updatePreferences={updatePreferences} />}
    </main>
  )
}

export default MainComponent;