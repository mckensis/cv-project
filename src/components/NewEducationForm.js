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
      className="education-form"
      onSubmit={(e) => addNewEducation(e)}
    >
      <label htmlFor="year">Years</label>
      <input
        id="year"
        name="year"
        type="text"
        placeholder="Date studied from - to"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
        autoFocus
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
      />
      <button type="button" onClick={() => setNewEducationFormVisible(false)}>Cancel</button>
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewEducationForm;