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

  useEffect(() => {
    if (education.length > 0) {
      setSectionEnabled(true);
    }
  }, [education]);

  const handleDeleteSection = () => {
    setSectionEnabled(false);
    setEducation([]);
  }

  return (
    <section
      className="education"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >

      {sectionEnabled && <>
        {isEditing ? 
        <h2 className="editing">Education</h2> : <h2>Education</h2>
        }

        {/* If there is any education to display */}
        {education.length > 0 &&
          education.map((item) => (
            <EducationArticle
              key={item.id}
              education={education}
              setEducation={setEducation}
              isEditing={isEditing}
              item={item}/>)
          )
        }

        {isEditing &&
          <button className="remove" onClick={() => handleDeleteSection()}>Delete</button>
        }
        {isHovering && !isEditing &&
          <button className="mode" onClick={() => setIsEditing(true)}>Edit</button>
        }
        {isEditing &&
          <button className="mode" onClick={() => setIsEditing(false)}>Save</button>
        }
        {isEditing && !newEducationFormVisible &&
          <button className="create" onClick={() => setNewEducationFormVisible(true)}>Add New Education</button>
        }

        {newEducationFormVisible && 
          <NewEducationForm
            education={education}
            setNewEducationFormVisible={setNewEducationFormVisible}
            setEducation={setEducation}
          />
        }
      </>}

      {!sectionEnabled &&
        <button className="add" onClick={() => setSectionEnabled(true)}>Add Education Section</button>
      }
    </section>
  )
}

export default Education;