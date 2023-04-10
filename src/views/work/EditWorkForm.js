import { useState } from "react";

const EditWorkForm = ({ 
  workSingular, work, setWork,
  countEditing, setCountEditing, setIsEditingWorkArticle }) => {

  const [tempWork, setTempWork] = useState({ ...workSingular });

  const handleDelete = () => {
    const count = countEditing - 1;
    setCountEditing(count);
    setWork(work.filter(element => element.id !== workSingular.id));
    localStorage.setItem('work', JSON.stringify(work.filter(element => element.id !== tempWork.id)));
  }

  const handleSave = () => {
    //Get the project to be edited
    const foundWork = work.find((item) => item.id === tempWork.id);
    if (!foundWork) {
      return;
    }

    // Update the value within the object key if the new value is different
    for (let item of Object.keys(foundWork)) {
      if (item !== 'id' && foundWork[item] !== tempWork[item]) {
        foundWork[item] = tempWork[item];
      }
    }

    const count = countEditing - 1;
    setWork(work);
    setIsEditingWorkArticle(false);
    setCountEditing(count);
    localStorage.setItem('work', JSON.stringify(work));
  }

  return (
    <form className="edit" onSubmit={(e) => e.preventDefault()}>
      <section className="form-container">
        <label htmlFor="job" tabIndex={-1}>Job Title</label>
        <input
          type="text"
          name="job"
          id="job"
          value={tempWork['title']}
          onChange={(e) => setTempWork({...tempWork, title: e.target.value})}
          placeholder="Job Title"
          maxLength="20"
          autoFocus
        />
        <label htmlFor="company" tabIndex={-1}>Company</label>
        <input
          type="text"
          name="company"
          id="company"
          maxLength="15"
          value={tempWork['company']}
          onChange={(e) => setTempWork({...tempWork, company: e.target.value})}
          placeholder="Company Name"
        />
        <label htmlFor="year" tabIndex={-1}>Date</label>
        <input
          type="text"
          name="year"
          id="year"
          value={tempWork['year']}
          onChange={(e) => setTempWork({...tempWork, year: e.target.value})}
          placeholder="Date of Employment"
          maxLength="12"
        />
        <label htmlFor="description" tabIndex={-1}>Description</label>
        <textarea
          name="description"
          id="description"
          value={tempWork['description']}
          onChange={(e) => setTempWork({...tempWork, description: e.target.value})}
          placeholder="Description of the Job"
          maxLength="500"  
        >
        </textarea>
      </section>
      <section className="button-container">
        <button
          className="cancel"
          type="button"
          onClick={() => handleDelete()}
        >
          Delete
        </button>
        <button
          className="submit"
          type="button"
          onClick={() => handleSave()}
        >
          Save
        </button>
      </section>
    </form>
  )
}

export default EditWorkForm;