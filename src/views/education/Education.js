import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import EducationArticle from "./EducationArticle";
import NewEducationForm from "./NewEducationForm";

const Education = () => {
  const [sectionEnabled, setSectionEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newEducationFormVisible, setNewEducationFormVisible] = useState(false);
  const [education, setEducation] = useState([
    {
      id: uuid(),
      year: '3000 - 3001',
      location: 'A College',
      course: 'Cooking up a storm'
    },
    {
      id: uuid(),
      year: '1000 - 1999',
      location: 'School of hard rocks xoxo',
      course: '2 standard grades'
    }
  ]);

  //Count how many entries in the section are currently in edit mode
  //Will help disable / enable the save section button
  const [countEditing, setCountEditing] = useState(0);

  useEffect(() => {
    if (education.length > 0) {
      setSectionEnabled(true);
    }
  }, [education.length]);

  const handleDeleteSection = () => {
    setSectionEnabled(false);
    setEducation([]);
  }

  const handleSaveSection = () => {
    setIsEditing(false);
    setNewEducationFormVisible(false);
  }

  const EducationArticles = () => {
    return education.length > 0 && education.map((item) => (
      <EducationArticle
        key={item.id}
        education={education}
        setEducation={setEducation}
        isEditing={isEditing}
        countEditing={countEditing}
        setCountEditing={setCountEditing}
        item={item}/>
    ))
  }

  return (
    <section
      className="education"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >

      {sectionEnabled && <>
        {/* Heading */}
        <h2 className={isEditing ? "editing" : null}>Education</h2>

        {/* Education Articles if there is any education to display */}
        {EducationArticles()}

        {/* Delete section button */}
        {isEditing && <>
          <button className="remove" onClick={() => handleDeleteSection()}>Delete</button>
          <button
          className="mode"
          onClick={() => handleSaveSection()}
          disabled={countEditing === 0 ? null : true}
          title={countEditing === 0 ? null : 'There are unsaved changes within this section'}
          >
            Save
          </button>
        </>}

        {/* Edit section button */}
        {isHovering && !isEditing &&
          <button className="mode" onClick={() => setIsEditing(true)}>Edit</button>
        }

        {/* Add education history button */}
        {isEditing && !newEducationFormVisible &&
          <button className="create" onClick={() => setNewEducationFormVisible(true)}>Add New Education</button>
        }
        
        {/* Add education history form */}
        {newEducationFormVisible && 
          <NewEducationForm
            education={education}
            setNewEducationFormVisible={setNewEducationFormVisible}
            setEducation={setEducation}
          />
        }
      </>}
      
      {/* Add education section button */}
      {!sectionEnabled &&
        <button className="add" onClick={() => setSectionEnabled(true)}>Add Education Section</button>
      }
    </section>
  )
}

export default Education;