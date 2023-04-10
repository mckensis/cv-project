import { useState } from 'react';
import EditEducationForm from './EditEducationForm';

const EducationArticle = ({ educationSingular, education, setEducation, isEditing, countEditing, setCountEditing }) => {
  const [isEditingEducationArticle, setIsEditingEducationArticle] = useState(false);

  const handleEdit = () => {
    const count = countEditing + 1;
    setIsEditingEducationArticle(true);
    setCountEditing(count);
  }

  return (
    <article className="education-article">
      {!isEditingEducationArticle && <>
        {(educationSingular['year'] || educationSingular['location'] || educationSingular['course']) &&
          <ul>
            {educationSingular['year'] && <li>{educationSingular['year']}</li>}
            {educationSingular['location'] && <li>{educationSingular['location']}</li>}
            {educationSingular['course'] && <li>{educationSingular['course']}</li>}
          </ul>
        }
        {isEditing &&
          <button className="edit" type="button" onClick={() => handleEdit()}>Edit</button>
        }
      </>}

      {/* Form for editing the entry */}
      {isEditingEducationArticle && isEditing && <>
        <EditEducationForm
          educationSingular={educationSingular}
          education={education}
          setEducation={setEducation}
          countEditing={countEditing}
          setCountEditing={setCountEditing}
          setIsEditingEducationArticle={setIsEditingEducationArticle}
        />
      </>}
    </article>
  )
}

export default EducationArticle;