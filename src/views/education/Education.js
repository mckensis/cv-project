import { useState } from "react";
import { v4 as uuid } from "uuid";
import EducationArticle from "./EducationArticle";
import NewEducationForm from "./NewEducationForm";

const Education = ({ updatePreferences }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newEducationFormVisible, setNewEducationFormVisible] = useState(false);
  const [education, setEducation] = useState(
    JSON.parse(localStorage.getItem('education'))
    || [
    {
      id: uuid(),
      year: '2020 - 2023',
      location: 'The University',
      course: 'The Course and The Grade'
    },
    {
      id: uuid(),
      year: '2000 - 2005',
      location: 'The School',
      course: 'The Classes and The Grades'
    }
  ]);

  //Count how many entries in the section are currently in edit mode
  //Will help disable / enable the save section button
  const [countEditing, setCountEditing] = useState(0);

  const handleDeleteSection = () => {
    updatePreferences("education");
  }

  const handleSaveSection = () => {
    setIsEditing(false);
    setNewEducationFormVisible(false);
  }

  const handleDisplayForm = () => {
    setCountEditing(0);
    setNewEducationFormVisible(true);
  }

  const EducationArticles = () => {
    return education.length > 0 && education.map((item) => (
      <EducationArticle
        key={item.id}
        educationSingular={item}
        education={education}
        setEducation={setEducation}
        isEditing={isEditing}
        countEditing={countEditing}
        setCountEditing={setCountEditing}
      />
    ))
  }

  return (
    <section className="education" onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
      <h2 className={isEditing ? "editing" : null}>Education</h2>

      {/* Education Articles if there is any education to display */}
      {!newEducationFormVisible && EducationArticles()}

      {isEditing && <>
        <button className="remove" onClick={() => handleDeleteSection()}>Delete</button>
        <button className="mode" onClick={() => handleSaveSection()} disabled={countEditing === 0 ? null : true} title={countEditing === 0 ? null : 'There are unsaved changes within this section'}>Save</button>

        {!newEducationFormVisible &&
          <button className="create" onClick={() => handleDisplayForm()}>Add New Education</button>
        }

        {/* Add education history form */}
        {newEducationFormVisible && 
          <NewEducationForm
            education={education}
            setEducation={setEducation}
            setNewEducationFormVisible={setNewEducationFormVisible}
          />
        }
      </>}

      {/* Edit section button */}
      {isHovering && !isEditing &&
        <button className="mode" onClick={() => setIsEditing(true)}>Edit</button>
      }
    </section>
  )
}

export default Education;