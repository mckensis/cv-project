import { useState } from 'react';
import EducationArticleEditForm from './EducationArticleEditForm';

const EducationArticle = ({ education, setEducation, item, isEditing, countEditing, setCountEditing }) => {
  const { year, location, course } = item;

  const [isEditingEducationArticle, setIsEditingEducationArticle] = useState(false);
  const [educationYear, setEducationYear] = useState(year);
  const [educationLocation, setEducationLocation] = useState(location);
  const [educationCourse, setEducationCourse] = useState(course);
  
  const handleDelete = () => {
    const count = countEditing - 1;
    setCountEditing(count);
    setEducation(education.filter(element => element.id !== item.id));
  }

  const handleEdit = () => {
    const count = countEditing + 1;
    setIsEditingEducationArticle(true);
    setCountEditing(count);
  }

  const handleSave = () => {
    const count = countEditing - 1;
    setIsEditingEducationArticle(false);
    setCountEditing(count);
  }

  return (
      <article className="education-article">
      {!isEditingEducationArticle && <ul>
        <li>{educationYear}</li>
        <li>{educationLocation}</li>
        <li>{educationCourse}</li>
      </ul>}

        {/* Delete button for each item */}
        {isEditing && !isEditingEducationArticle && <>
          <button
            className="edit education-item"
            type="button"
            onClick={() => handleEdit()}
          >
            Edit
          </button>
        </>}
        {/* Form for editing the entry */}
        {isEditing && isEditingEducationArticle && <>
          <EducationArticleEditForm
            educationYear={educationYear}
            setEducationYear={setEducationYear}
            educationLocation={educationLocation}
            setEducationLocation={setEducationLocation}
            educationCourse={educationCourse}
            setEducationCourse={setEducationCourse}
            setIsEditingEducationArticle={setIsEditingEducationArticle}
            handleSave={handleSave}
            handleDelete={handleDelete}
          />
        </>}
      </article>
  )
}

export default EducationArticle;