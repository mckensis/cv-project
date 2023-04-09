import { useState } from "react";
import { v4 as uuid } from "uuid";

const EditSkillsForm = ({ skills, setSkills, SkillItems, setIsEditing, setSkillsSectionEnabled }) => {
  const [newSkill, setNewSkill] = useState('');
  
  const handleDeleteSection = () => {
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

  return (
    <>
    <form className="skills edit" onSubmit={(e) => e.preventDefault()}>
      <section className="form-container">
        {SkillItems()}
      </section>
      <section className="button-container">
        <input className="new" type="text" value={newSkill} placeholder="Enter a Skill" maxLength="20" onChange={(e) => setNewSkill(e.target.value)} />
        <button type="button" className="add" onClick={(e) => handleAddSkill(newSkill)}>Add Skill</button>
      </section>
    </form>
    <button className="remove" onClick={() => handleDeleteSection()}>Delete</button>
    <button className="mode" onClick={() => handleSaveSection()}>Save</button>
    </>
  )
}

export default EditSkillsForm;