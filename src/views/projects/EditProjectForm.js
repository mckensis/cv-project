import { useState } from "react";
import checkPopulated from "../../checkPopulated";
import { v4 as uuid } from "uuid";

const EditProjectForm = ({
  project, projects, setProjects,
  countEditing, setCountEditing, setIsEditingProjectArticle }) => {

  const [tempProject, setTempProject] = useState({ ...project });
  const [newBullet, setNewBullet] = useState('');

  const TextArea = () => {
    return <textarea
      name="description"
      id="description"
      value={tempProject['description']}
      onChange={(e) => setTempProject({...tempProject, description: e.target.value})}
      placeholder="Description of the Project"
      minLength="1"
      maxLength="500" />
  }

  const BulletPoints = () => {
    if (!tempProject['process']) return;
  
    return (
      tempProject['process'].map((bullet, index) => (
        <input
          key={`${tempProject.id}${uuid()}`}
          value={bullet}
          onChange={(e) => handleUpdateBullet(e.target.value, index)}
        />
        ))
    ) 
  };

  const handleDelete = () => {
    const count = countEditing - 1;
    setCountEditing(count);
    setProjects(projects.filter(element => element.id !== tempProject.id));
    localStorage.setItem('projects', JSON.stringify(projects.filter(element => element.id !== tempProject.id)));
  }

  const handleSave = () => {
    //Get the project to be edited
    const foundProject = projects.find((item) => item.id === tempProject.id);
    if (!foundProject) {
      return;
    }

    if (!checkPopulated(tempProject)) {
      handleDelete();
      return;
    }
    
    // Update the value within the object key if the new value is different
    for (let item of Object.keys(foundProject)) {
      if (item !== 'id' && foundProject[item] !== tempProject[item]) {
        foundProject[item] = tempProject[item];
      }
    }

    const count = countEditing - 1;
    setProjects(projects);
    setIsEditingProjectArticle(false);
    setCountEditing(count);
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  const handleToggleView = (e) => {
    setTempProject({...tempProject, display: e.target.value});
  }

  const handleUpdateTags = (e) => {
    const newTags = e.target.value.split(',');
    setTempProject({...project, tags: newTags});
  }

  const handleUpdateBullet = (value, index) => {
    const tempProcess = [...tempProject.process];
    tempProcess[index] = value;
    setTempProject({...tempProject, process: tempProcess.filter(content => content !== '')});
  }

  const handleAddNewBullet = () => {
    let bullets;

    if (!newBullet) return;
    
    if (!tempProject['process']) {
      tempProject['process'] = [];
    }

    bullets = [...tempProject['process']];    
    bullets.push(newBullet);
    setTempProject({...tempProject, process: bullets});
  }

  return (
    <form className="edit" onSubmit={(e) => e.preventDefault()}>
      <section className="form-container">
        <label htmlFor="title" tabIndex={-1}>Project Title</label>
        <input
          autoFocus
          type="text"
          name="title"
          id="title"
          maxLength="30"
          placeholder="Project Title"
          value={tempProject['title']}
          onChange={(e) => setTempProject({...tempProject, title: e.target.value })}
        />
        <label htmlFor="tags" tabIndex={-1}>Project Tags</label>
        <input
          type="text"
          name="tags"
          id="tags"
          maxLength="100"
          placeholder="Enter tags here seperated by a comma followed by a space eg. 'React, Jest, Node'"
          value={tempProject['tags']}
          onChange={(e) => handleUpdateTags(e)}
        />
        {/* Date input */}
        <label htmlFor="year" tabIndex={-1}>Date</label>
        <input
          type="text"
          name="year"
          id="year"
          maxLength="20"
          placeholder="Date of Project"
          value={tempProject['year']}
          onChange={(e) => setTempProject({...tempProject, year: e.target.value})}
        />
        {/* URL input */}
        <label htmlFor="url" tabIndex={-1}>Live Url</label>
        <input
          type="text"
          name="url"
          id="url"
          maxLength="60"
          placeholder="Live URL"
          value={tempProject['url']}
          onChange={(e) => setTempProject({...tempProject, url: e.target.value})}
        />
        {/* Github URL input */}
        <label htmlFor="github" tabIndex={-1}>GitHub Url</label>
        <input
          type="text"
          name="github"
          id="github"
          maxLength="60"
          placeholder="GitHub URL"
          value={tempProject['github']}
          onChange={(e) => setTempProject({...tempProject, github: e.target.value})}
        />
        <fieldset className="info">
          <legend>Project Information</legend>
          <label className="visible" htmlFor="bullet">Bullet Points
            <input
              type="radio"
              id="bullet"
              name="toggle"
              value="bullet"
              checked={tempProject['display'] === 'bullet'}
              onChange={(e) => handleToggleView(e)}
            />
          </label>
          <label className="visible" htmlFor="description">Paragraph
            <input
              type="radio"
              id="description"
              name="toggle"
              value="description"
              checked={tempProject['display'] === 'description'}
              onChange={(e) => handleToggleView(e)}
            />
          </label>
          {tempProject['display'] === 'description' && <>
            <label htmlFor="description" tabIndex={-1}>Description</label>
            {TextArea()}
          </>}
          {tempProject['display'] === 'bullet' && <>
            {BulletPoints()}
          </>}
        </fieldset>
      </section>
      {tempProject['display'] === 'bullet' && <section className="new-bullet">
        <input type="text" placeholder="New Bullet Point" value={newBullet} onChange={(e) => setNewBullet(e.target.value)} maxLength="120" />
        <button type="button" className="add" onClick={() => handleAddNewBullet()} disabled={newBullet ? null : true}>Add Bullet Point</button>
      </section>}
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

export default EditProjectForm;