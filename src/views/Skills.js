import { useState } from "react";
import { v4 as uuid } from "uuid";

const Skills = () => {
  const [sectionEnabled, setSectionEnabled] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [newSkillFormVisible, setNewSkillFormVisible] = useState(false);
  const [countEditing, setCountEditing] = useState(0);
  const [skills, setSkills] = useState([
    'Smart Thinker',
    'Strong Lifter',
    'Fast Runner',
    'Slow Crawler',
    'High Jumper',
    'Quick Swimmer',
  ]);

  const handleDeleteSection = () => {
    setSectionEnabled(false);
    setSkills([]);
  }

  const handleSaveSection = () => {
    setIsEditing(false);
    setNewSkillFormVisible(false);
  }

  const SkillItems = () => {
    return skills.length > 0 && skills.map((item) => (
      <li key={uuid()}>
        {item}
      </li>
    ));
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
          {SkillItems()}
        </ul>

        {/* Delete section button */}
        {isEditing &&
          <button className="remove" onClick={() => handleDeleteSection()}>Delete</button>
        }

        {/* Edit section button */}
        {isHovering && !isEditing &&
          <button className="mode" onClick={() => setIsEditing(true)}>Edit</button>
        }

        {/* Save section button */}
        {isEditing ?
          countEditing === 0 ?
          <button className="mode" onClick={() => handleSaveSection()}>Save</button>
          : <button className="mode" disabled title="Save or delete any section entries currently in edit mode to save.">Save</button>
          : null
        }

        {/* Add work history button */}
        {isEditing && !newSkillFormVisible &&
          <button className="create" onClick={() => setNewSkillFormVisible(true)}>Add New Skill</button>
        }

        {/* Add work history form */}
        {newSkillFormVisible && <p>Yass</p>
        }
      </>}


      {!sectionEnabled && <>
        <button className="add" onClick={() => setSectionEnabled(true)}>Add Skill Summary Section</button>      
      </>}
    </section>
  )
}

export default Skills;