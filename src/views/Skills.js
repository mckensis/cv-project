import { useState } from "react";
import { v4 as uuid } from "uuid";

const Skills = ({ setSkillsSectionEnabled }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [newSkill, setNewSkill] = useState('');
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

  const handleDeleteSection = () => {
    setSkills([]);
    setSkillsSectionEnabled(false);
  }

  const handleSaveSection = () => {
    setIsEditing(false);
    localStorage.setItem('skills', JSON.stringify(skills));
  }
  
  const handleAddSkill = (description) => {
    if (!description) return;

    const newSkill = { id: uuid(), skill: description };
    setSkills([...skills, newSkill]);
    localStorage.setItem('skills', JSON.stringify(skills));
  }
  
  const handleEditSkill = (e, index) => {
    skills[index] = e.target.value;
    setSkills(skills.filter(item => item !== ''));
  }

  const SkillList = () => {
    return <ul className="skill-list">{SkillItems()}</ul>
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
          onChange={(e) => handleEditSkill(e, index)}
        />
    ));
  }

  const EditForm = () => {
    return (
      <>
      <form className="skills edit" onSubmit={(e) => e.preventDefault()}>
        <section className="form-container">
          {SkillItems()}
        </section>
        <section className="button-container">
          <input className="new" type="text" value={newSkill} maxLength="20" onChange={(e) => setNewSkill(e.target.value)} />
          <button type="button" className="add" onClick={(e) => handleAddSkill(newSkill)}>Add Skill</button>
        </section>
      </form>
      <button className="remove" onClick={() => handleDeleteSection()}>Delete</button>
      <button className="mode" onClick={() => handleSaveSection()}>Save</button>
      </>
    )
  }

  return (
    <section
      className="skills"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <h2 className={isEditing ? "editing" : null}>Key Skills</h2>
        
        {/* List of skills */}
        {!isEditing &&
          SkillList()
        }

        {/* Edit Skills Form */}
        {isEditing && <>
          {EditForm()}
        </>}

        {/* Edit */}
        {isHovering && !isEditing &&
          <button className="mode" onClick={() => setIsEditing(true)}>Edit</button>
        }
    </section>
  )
}

export default Skills;