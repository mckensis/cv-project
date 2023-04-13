import { useState, useRef } from "react";
import checkPopulated from "../../checkPopulated";
import { v4 as uuid } from "uuid";

const EditProjectForm = ({ project, projects, setProjects, countEditing, setCountEditing, setIsEditingProjectArticle }) => {

  const inputRef = useRef();

  const [newBullet, setNewBullet] = useState('');
  const [updatedProject, setUpdatedProject] = useState({...project});

  const handleToggleView = (e) => {
    setUpdatedProject({...updatedProject, display: e.target.value});
  }

  const handleUpdateTags = (e) => {
    const newTags = e.target.value.split(',');
    setUpdatedProject({...updatedProject, tags: newTags});
  }

  const handleUpdateBullet = (value, index) => {
    const tempProcess = [...updatedProject.process];
    
    //Remove the data from the project
    if (!value) {
      tempProcess.splice(index, 1);
      setUpdatedProject({...updatedProject, process: tempProcess});
      return;
    }
    
    tempProcess[index]['value'] = value;
    setUpdatedProject({...updatedProject, process: tempProcess});
  }

  const handleDeleteProject = () => {
    const count = countEditing - 1;
    setCountEditing(count);
    setProjects(projects.filter(element => element.id !== project.id));
    localStorage.setItem('projects', JSON.stringify(projects.filter(element => element.id !== project.id)));
  }
  
  const handleAddNewBullet = () => {
    if (!newBullet) return;
    if (!updatedProject['process']) updatedProject['process'] = [];
    const bullets = [...updatedProject['process'], { id: uuid(), value: newBullet }];
    setUpdatedProject({...updatedProject, process: bullets});
    setNewBullet('');
    inputRef.current.focus();
  }

  const handleSave = () => {
    //Get the project to be edited
    const foundProject = projects.find((item) => item.id === project.id);
    if (!foundProject) return;

    if (!checkPopulated(updatedProject)) {
      handleDeleteProject();
      return;
    }
    
    // Update the value within the object key if the new value is different
    for (let item of Object.keys(foundProject)) {
      if (item !== 'id' && foundProject[item] !== updatedProject[item]) {
        foundProject[item] = updatedProject[item];
      }
    }

    const tempProjects = [...projects];
    const updatedProjects = tempProjects.map((pro) => (
      pro.id === updatedProject.id ? pro = updatedProject : pro
    ));

    const count = countEditing - 1;
    setProjects(updatedProjects);
    setIsEditingProjectArticle(false);
    setCountEditing(count);
    localStorage.setItem('projects', JSON.stringify(projects));
  }
  
  const TextArea = () => {
    return <>
      <label htmlFor="description" tabIndex={-1}>Description</label>
      <textarea
        name="description"
        id="description"
        value={updatedProject['description']}
        onChange={(e) => setUpdatedProject({...updatedProject, description: e.target.value})}
        placeholder="Description of the Project"
        maxLength="500"
      />
    </>
  };

  const BulletPoints = () => {
    if (!updatedProject['process']) return;
    return (
      updatedProject['process'].map((bullet, index) => (
        <input
          key={bullet.id}
          value={bullet.value}
          onChange={(e) => handleUpdateBullet(e.target.value, index)}
        />
        ))
    ) 
  };

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
          value={updatedProject['title']}
          onChange={(e) => setUpdatedProject({...updatedProject, title: e.target.value })}
        />
        <label htmlFor="tags" tabIndex={-1}>Project Tags</label>
        <input
          type="text"
          name="tags"
          id="tags"
          maxLength="100"
          placeholder="Enter tags here seperated by a comma followed by a space eg. 'React, Jest, Node'"
          value={updatedProject['tags']}
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
          value={updatedProject['year']}
          onChange={(e) => setUpdatedProject({...updatedProject, year: e.target.value})}
        />
        {/* URL input */}
        <label htmlFor="url" tabIndex={-1}>Live Url</label>
        <input
          type="text"
          name="url"
          id="url"
          maxLength="60"
          placeholder="Live URL"
          value={updatedProject['url']}
          onChange={(e) => setUpdatedProject({...updatedProject, url: e.target.value})}
        />
        {/* Github URL input */}
        <label htmlFor="github" tabIndex={-1}>GitHub Url</label>
        <input
          type="text"
          name="github"
          id="github"
          maxLength="60"
          placeholder="GitHub URL"
          value={updatedProject['github']}
          onChange={(e) => setUpdatedProject({...updatedProject, github: e.target.value})}
        />
        <fieldset className="info">
          <legend>Project Information</legend>
          <label className="visible" htmlFor="bullet">Bullet Points
            <input
              type="radio"
              id="bullet"
              name="toggle"
              value="bullet"
              checked={updatedProject['display'] === 'bullet'}
              onChange={(e) => handleToggleView(e)}
            />
          </label>
          <label className="visible" htmlFor="description">Paragraph
            <input
              type="radio"
              id="description"
              name="toggle"
              value="description"
              checked={updatedProject['display'] === 'description'}
              onChange={(e) => handleToggleView(e)}
            />
          </label>
          {updatedProject['display'] === 'description' && <>
            <label htmlFor="description" tabIndex={-1}>Description</label>
            {TextArea()}
          </>}
          {updatedProject['display'] === 'bullet' && <>
            {BulletPoints()}
          </>}
        </fieldset>
      </section>
      {updatedProject['display'] === 'bullet' && <section className="new-bullet">
        <input type="text" ref={inputRef} placeholder="New Bullet Point" value={newBullet} onChange={(e) => setNewBullet(e.target.value)} maxLength="120" />
        <button type="button" className="add" onClick={() => handleAddNewBullet()} disabled={newBullet ? null : true}>Add Bullet Point</button>
      </section>}
      <section className="button-container">
        <button
          className="cancel"
          type="button"
          onClick={() => handleDeleteProject()}
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