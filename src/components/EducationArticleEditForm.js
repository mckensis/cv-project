const EducationArticleEditForm = ({ 
  educationYear, setEducationYear,
  educationLocation, setEducationLocation, educationCourse, setEducationCourse }) => {

    return (
      <form className="education-item-edit-form" onSubmit={(e) => e.preventDefault()}>
        {/* Year input */}
        <label htmlFor="year" tabIndex={-1}>Date</label>
        <input
          type="text"
          name="year"
          id="year"
          value={educationYear}
          onChange={(e) => setEducationYear(e.target.value)}
          autoFocus
          placeholder="Year from - to"
          maxLength="12"
          minLength="1"
          required
        />
        {/* Job Title input */}
        <label htmlFor="location" tabIndex={-1}>Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={educationLocation}
          minLength="1"
          maxLength="25"
          onChange={(e) => setEducationLocation(e.target.value)}
          placeholder="Location"
          required
          />
        {/* Company input */}
        <label htmlFor="course" tabIndex={-1}>Course</label>
        <input
          type="text"
          name="course"
          id="course"
          minLength="1"
          maxLength="25"
          value={educationCourse}
          onChange={(e) => setEducationCourse(e.target.value)}
          placeholder="Course"
          required
        />
      </form>
    )
}

export default EducationArticleEditForm;