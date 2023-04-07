import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const Skills = () => {
  const [sectionEnabled, setSectionEnabled] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [skills, setSkills] = useState(['bingo', 'running']);

  const SkillItems = (mode) => {
    if (mode === 'view') {
      return skills.length > 0 && skills.map((item) => (
        <li key={uuid()}>
          {item}
        </li>
      ));
    }
  }

  return (
    <section
      className="skills"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      {sectionEnabled && <>
        <h2 className={isEditing ? "editing" : null}>Key Skills</h2>
        
        {/* List of skills */}
        <ul className="skill-list">
          {SkillItems('view')}
        </ul>


      </>}


        {/* Edit section button */}
        {isHovering && !isEditing &&
          <button className="mode" onClick={() => setIsEditing(true)}>Edit</button>
        }

      {!sectionEnabled && <>
        <button className="add" onClick={() => setSectionEnabled(true)}>Add Skill Summary Section</button>      
      </>}
    </section>
  )
}

export default Skills;