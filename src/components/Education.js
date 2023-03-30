import { useState } from "react";
import EducationArticle from "./EducationArticle";
import NewEducationForm from "./NewEducationForm";

const Education = () => {
  
  const [sectionEnabled, setSectionEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newEducation, setNewEducation] = useState(false);
  const [education, setEducation] = useState([
    {
      year: '3000 - 3001',
      location: 'A College',
      course: 'Cooking up a storm'
    },
    {
      year: '1000 - 1999',
      location: 'School of hard rocks xoxo',
      course: '2 standard grades'
    }
  ]);

  return (
    <section
      className="education"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >

      {sectionEnabled && <>
        <h2>Education</h2>

        {/* If there is any education to display */}
        {education.length > 0 &&
          education.map((edu, idx) => (
            <EducationArticle key={idx} education={edu}/>)
          )
        }

        {isEditing &&
          <button className="remove" onClick={() => setSectionEnabled(false)}>Remove Section</button>
        }
        {isHovering && !isEditing &&
          <button className="mode" onClick={() => setIsEditing(true)}>Edit</button>
        }
        {isEditing &&
          <button className="mode" onClick={() => setIsEditing(false)}>Save</button>
        }
        {isEditing && !newEducation &&
          <button onClick={() => setNewEducation(true)}>Add New Education</button>
        }

        {newEducation && 
          <NewEducationForm
            education={education}
            setNewEducation={setNewEducation}
            setEducation={setEducation}
          />
        }
      </>}

      {!sectionEnabled &&
        <button onClick={() => setSectionEnabled(true)}>Add Education Section</button>
      }
    </section>
  )
}

export default Education;