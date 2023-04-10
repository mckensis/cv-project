import { useState } from "react";
import checkPopulated from "../../checkPopulated";

const EditEducationForm = ({
  educationSingular, education, setEducation,
  countEditing, setCountEditing, setIsEditingEducationArticle }) => {

  const [tempEducation, setTempEducation] = useState({...educationSingular});

  const handleDelete = () => {
    const count = countEditing - 1;
    setCountEditing(count);
    setEducation(education.filter(element => element.id !== tempEducation.id));
    localStorage.setItem('education', JSON.stringify(education.filter(element => element.id !== tempEducation.id)));
  }

  const handleSave = () => {
    //Get the project to be edited
    const foundEducation = education.find((item) => item.id === tempEducation.id);
    if (!foundEducation) {
      return;
    }

    if (!checkPopulated(tempEducation)) {
      handleDelete();
      return;
    }
    
    // Update the value within the object key if the new value is different
    for (let item of Object.keys(foundEducation)) {
      if (item !== 'id' && foundEducation[item] !== tempEducation[item]) {
        foundEducation[item] = tempEducation[item];
      }
    }

    const count = countEditing - 1;
    setEducation(education)
    setIsEditingEducationArticle(false);
    setCountEditing(count);
    localStorage.setItem('education', JSON.stringify(education));
  }
  
  const validateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      handleSave();
    }
  }

  return (
    <form className="edit" onSubmit={(e) => validateForm(e)}>
      <section className="form-container">
        <label htmlFor="year" tabIndex={-1}>Date</label>
        <input
          autoFocus
          required
          type="text"
          name="year"
          id="year"
          minLength="1"
          maxLength="20"
          placeholder="Date of Study"
          value={tempEducation['year']}
          onChange={(e) => setTempEducation({...tempEducation, year: e.target.value})}
        />
        <label htmlFor="location" tabIndex={-1}>Location</label>
        <input
          required
          type="text"
          name="location"
          id="location"
          minLength="1"
          maxLength="30"
          placeholder="Study Location"
          value={tempEducation['location']}
          onChange={(e) => setTempEducation({...tempEducation, location: e.target.value})}
        />
        <label htmlFor="course" tabIndex={-1}>Course</label>
        <input
          required
          type="text"
          name="course"
          id="course"
          minLength="1"
          maxLength="50"
          placeholder="Course / Grade"
          value={tempEducation['course']}
          onChange={(e) => setTempEducation({...tempEducation, course: e.target.value})}
        />
        </section>

        {/* Delete / Save buttons */}
        <section className="button-container">
          <button className="cancel" type="button" onClick={() => handleDelete()}>Delete</button>
          <button className="submit" type="submit">Save</button>
        </section>
    </form>
  )
}

export default EditEducationForm;