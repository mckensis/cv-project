const EducationArticle = ({ education, setEducation, item, isEditing }) => {
  const { year, location, course } = item;
  
  const removeEducationItem = () => {
    setEducation(education.filter(element => element.id !== item.id));    
  }

  return (
    <article className="education-article">
        <p>{year}</p>
        <p>{location}</p>
        <p>{course}</p>

        {/* Delete button for each item */}
        {isEditing && <>
          <button
            className="edit work-item"
            type="button"
          >
            Edit
          </button>
          <button
          className="delete education-item"
          type="button"
          onClick={() => removeEducationItem()}
          >
            Delete
          </button>
        </>}
      </article>
  )
}

export default EducationArticle;