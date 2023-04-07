import { useState } from "react";
import { v4 as uuid } from "uuid";

const NewEducationForm = ({ education, setEducation, setNewEducationFormVisible }) => {
  
  const [year, setYear] = useState('');
  const [location, setLocation] = useState('');
  const [course, setCourse] = useState('');

  const addNewEducation = (e) => {
    const newEducation = { year, location, course, id: uuid() };
    const updatedEducation = [...education, newEducation];
    setEducation(updatedEducation);
    setNewEducationFormVisible(false);
  }
  
  return (
    <form
      className="new"
      onSubmit={(e) => addNewEducation(e)}
    >
      <section className="form-container">
        <label htmlFor="year">Years</label>
        <input
          id="year"
          name="year"
          type="text"
          placeholder="Date of Study"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          autoFocus
          maxLength="20"
          />
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Study Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          maxLength="36"
          />
        <label htmlFor="">Course / Grade</label>
        <input
          id="course"
          name="course"
          type="text"
          placeholder="Course / Grade"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
          maxLength="20"
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