import { useState } from "react";
import { v4 as uuid } from "uuid";
import EditSkillsForm from "./EditSkillsForm";

const Skills = ({ updatePreferences }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [skills, setSkills] = useState(
    JSON.parse(localStorage.getItem('skills'))
    || [
    {
      id: uuid(),
      skill: 'Smart Thinker'
    },
    {
      id: uuid(),
      skill: 'Strong Lifter'
    },
    {
      id: uuid(),
      skill: 'Fast Runner'
    },
    {
      id: uuid(),
      skill: 'Slow Crawler'
    },
    {
      id: uuid(),
      skill: 'High Jumper'
    },
    {
      id: uuid(),
      skill: 'Quick Swimmer'
    }
  ]);

  const handleEditSkill = (e, index) => {
    skills[index] = e.target.value;
    setSkills(skills.filter(item => item !== ''));
  }

  const SkillItems = () => {
    return skills.length > 0 && skills.map((item, index) => (
      !isEditing ?
        <li key={item.id}>{item.skill}</li>
      : <input
          key={item.id}
          type="text"
          id={item.id}
          maxLength="20"
          value={item.skill}
          placeholder="Skill"
          onChange={(e) => handleEditSkill(e, index)}
        />
    ));
  }

  return (
    <section
      className="skills"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <h2 className={isEditing ? "editing" : null}>Key Skills</h2>

      {/* List of skills */}
      {!isEditing && <ul className="skill-list">{SkillItems()}</ul>}

      {/* Edit Skills Form */}
      {isEditing &&
        <EditSkillsForm
          skills={skills}
          setSkills={setSkills}
          SkillItems={SkillItems}
          setIsEditing={setIsEditing}
          updatePreferences={updatePreferences}
        />
      }

      {/* Edit Section Button */}
      {isHovering && !isEditing &&
        <button className="mode" onClick={() => setIsEditing(true)}>Edit</button>
      }
    </section>
  )
}

export default Skills;