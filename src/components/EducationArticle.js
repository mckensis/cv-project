const EducationArticle = ({ education }) => {
  const { year, location, course } = education;
  
  return (
    <article className="education-item">
        <p>{year}</p>
        <p>{location}</p>
        <p>{course}</p>
      </article>
  )
}

export default EducationArticle;