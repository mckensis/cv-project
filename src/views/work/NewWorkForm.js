import { useState } from "react";
import { v4 as uuid } from "uuid";

const NewWorkForm = ({ work, setWork, setNewWorkFormVisible }) => {
  
  const [year, setYear] = useState('');
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');

  const addNewWork = (e) => {
    const newWork = { year, company, jobTitle, description, id: uuid() };
    const updatedWork = [...work, newWork];
    setWork(updatedWork);
    setNewWorkFormVisible(false);
  }
  
  return (
    <form
      className="work-form"
      onSubmit={(e) => addNewWork(e)}
    >
      <label htmlFor="year">Date</label>
      <input
        id="year"
        name="year"
        type="text"
        placeholder="Date of Employment"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
        autoFocus
      />
      <label htmlFor="company">Company / Location</label>
      <input
        id="company"
        name="company"
        type="text"
        placeholder="Company Name / Location"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
      <label htmlFor="job">Job Title</label>
      <input
        id="job"
        name="job"
        type="text"
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        required
      />
      <textarea
        name="description"
        id="description"
        rows="3"
        placeholder="Description of the Job"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      >
      </textarea>
      <button type="button" onClick={() => setNewWorkFormVisible(false)}>Cancel</button>
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewWorkForm;