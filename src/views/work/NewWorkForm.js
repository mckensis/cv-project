import { useState } from "react";
import { v4 as uuid } from "uuid";
import checkPopulated from "../../checkPopulated";

const NewWorkForm = ({ work, setWork, setNewWorkFormVisible }) => {

  const [newWork, setNewWork] = useState({
    id: uuid(),
    year: '',
    title: '',
    company: '',
    description: ''
  });

  const addNewWork = (e) => {
    e.preventDefault();

    if (!checkPopulated(newWork)) {
      return;
    }

    const updatedWork = [...work, newWork];
    setWork(updatedWork);
    localStorage.setItem('work', JSON.stringify(updatedWork));
    setNewWorkFormVisible(false);
  }
  
  return (
    <form
      className="new"
      onSubmit={(e) => addNewWork(e)}
    >
      <section className="form-container">
        <label htmlFor="title" tabIndex={-1}>Job Title</label>
        <input
          autoFocus
          id="title"
          name="title"
          type="text"
          maxLength="30"
          placeholder="Job Title"
          value={newWork['title']}
          onChange={(e) => setNewWork({...newWork, title: e.target.value})}
        />
        <label htmlFor="company" tabIndex={-1}>Company / Location</label>
        <input
          id="company"
          name="company"
          type="text"
          maxLength="30"
          placeholder="Company Name / Location"
          value={newWork['company']}
          onChange={(e) => setNewWork({...newWork, company: e.target.value})}
        />
        <label htmlFor="year" tabIndex={-1}>Date</label>
        <input
          id="year"
          name="year"
          type="text"
          maxLength="20"
          placeholder="Date of Employment"
          value={newWork['year']}
          onChange={(e) => setNewWork({...newWork, year: e.target.value})}
        />
        <label htmlFor="description" tabIndex={-1}>Description</label>
        <textarea
          name="description"
          id="description"
          maxLength="400"
          placeholder="Description of the Job"
          value={newWork['description']}
          onChange={(e) => setNewWork({...newWork, description: e.target.value})}
        />
      </section>
      <section className="button-container">
        <button className="cancel" type="button" onClick={() => setNewWorkFormVisible(false)}>Cancel</button>
        <button className="submit" type="submit">Submit</button>
      </section>
    </form>
  )
}

export default NewWorkForm;