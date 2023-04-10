import { useState } from "react";
import { v4 as uuid } from "uuid";
import checkPopulated from "../../checkPopulated";

const NewEducationForm = ({ education, setEducation, setNewEducationFormVisible }) => {
  
  const [newEducation, setNewEducation] = useState({
    id: uuid(),
    year: '',
    location: '',
    course: ''
  });

  const addNewEducation = (e) => {
    e.preventDefault();

    if (!checkPopulated(newEducation)) {
      return;
    }

    const updatedEducation = [...education, newEducation];
    setEducation(updatedEducation);
    localStorage.setItem('education', JSON.stringify(updatedEducation));
    setNewEducationFormVisible(false);
  }
  
  return (
    <form className="new" onSubmit={(e) => addNewEducation(e)}>
      <section className="form-container">
        <label htmlFor="year" tabIndex={-1}>Years</label>
        <input
          autoFocus
          required
          id="year"
          name="year"
          type="text"
          maxLength="20"
          placeholder="Date of Study"
          value={newEducation['year']}
          onChange={(e) => setNewEducation({...newEducation, year: e.target.value})}
          />
        <label htmlFor="location" tabIndex={-1}>Location</label>
        <input
          required
          id="location"
          name="location"
          type="text"
          maxLength="30"
          placeholder="Study Location"
          value={newEducation['location']}
          onChange={(e) => setNewEducation({...newEducation, location: e.target.value})}
          />
        <label htmlFor="course" tabIndex={-1}>Course / Grade</label>
        <input
          required
          id="course"
          name="course"
          type="text"
          maxLength="50"
          placeholder="Course / Grade"
          value={newEducation['course']}
          onChange={(e) => setNewEducation({...newEducation, course: e.target.value})}
          />
      </section>
      <section className="button-container">
        <button className="cancel" type="button" onClick={() => setNewEducationFormVisible(false)}>Cancel</button>
        <button className="submit" type="submit">Submit</button>
      </section>
    </form>
  )
}

export default NewEducationForm;