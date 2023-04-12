import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import checkPopulated from "../../checkPopulated";

const NewProjectForm = ({ projects, setProjects, setNewProjectFormVisible }) => {

  const inputRef = useRef();

  const [newBullet, setNewBullet] = useState('');
  const [newProject, setNewProject] = useState({
    id: uuid(),
    title: '',
    year: '',
    tags: '',
    display: 'bullet',
    process: [],
    description: '',
    url: '',
    github: '',
  });

  const handleToggleView = (e) => {
    setNewProject({...newProject, display: e.target.value});
  }

  const handleUpdateTags = (e) => {
    const newTags = e.target.value.split(',');
    setNewProject({...newProject, tags: newTags});
  }

  const handleUpdateBullet = (value, index) => {
    const tempProcess = [...newProject.process];
    tempProcess[index] = value;
    setNewProject({...newProject, process: tempProcess.filter(content => content !== '')});
  }

  const handleAddNewBullet = () => {
    let bullets;

    if (!newBullet) return;
    
    if (!newProject['process']) {
      newProject['process'] = [];
    }

    bullets = [...newProject['process']];    
    bullets.push(newBullet);
    setNewProject({...newProject, process: bullets});
    setNewBullet('');
    inputRef.current.focus();
  }

  const TextArea = () => {
    return <>
      <label htmlFor="description" tabIndex={-1}>Description</label>
      <textarea
        name="description"
        id="description"
        value={newProject['description']}
        onChange={(e) => setNewProject({...newProject, description: e.target.value})}
        placeholder="Description of the Project"
        minLength="1"
        maxLength="500"
      />
    </>
  };

  const BulletPoints = () => {
    if (!newProject['process']) return;
    return (
      newProject['process'].map((bullet, index) => (
        <input
          key={`${newProject.id}${uuid()}`}
          value={bullet}
          onChange={(e) => handleUpdateBullet(e.target.value, index)}
        />
        ))
    ) 
  };

  const addNewProject = (e) => {
    e.preventDefault();

    if (!checkPopulated(newProject)) {
      return;
    }

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    setNewProjectFormVisible(false);
    console.log(updatedProjects);
  }

  return (
    <form className="new" onSubmit={(e) => addNewProject(e)}>
      <section className="form-container">
        <label htmlFor="title" tabIndex={-1}>Project Title</label>
        <input
          autoFocus
          type="text"
          id="title"
          name="title"
          maxLength="30"
          placeholder="Project Title"
          value={newProject['title']}
          onChange={(e) => setNewProject({...newProject, title: e.target.value })}
        />
        <label htmlFor="tags" tabIndex={-1}>Project Tags</label>
        <input
          type="text"
          name="tags"
          id="tags"
          maxLength="100"
          placeholder="Enter tags here seperated by a comma followed by a space eg. 'React, Jest, Node'"
          value={newProject['tags']}
          onChange={(e) => handleUpdateTags(e)}
        />
        <label htmlFor="year" tabIndex={-1}>Date of Project</label>
        <input
          type="text"
          name="year"
          id="year"
          maxLength="20"
          placeholder="Date of Project"
          value={newProject['year']}
          onChange={(e) => setNewProject({...newProject, year: e.target.value})}
        />
        <label htmlFor="url" tabIndex={-1}>Live Url</label>
        <input
          type="text"
          name="url"
          id="url"
          maxLength="60"
          placeholder="Live URL"
          value={newProject['url']}
          onChange={(e) => setNewProject({...newProject, url: e.target.value})}
        />
        <label htmlFor="github" tabIndex={-1}>GitHub Url</label>
        <input
          type="text"
          name="github"
          id="github"
          maxLength="60"
          placeholder="GitHub URL"
          value={newProject['github']}
          onChange={(e) => setNewProject({...newProject, github: e.target.value})}
        />

        <fieldset className="info">
          <legend>Project Information</legend>
          <label className="visible" htmlFor="bullet">Bullet Points
            <input
              type="radio"
              id="bullet"
              name="toggle"
              value="bullet"
              checked={newProject['display'] === 'bullet'}
              onChange={(e) => handleToggleView(e)}
            />
          </label>
          <label className="visible" htmlFor="description">Paragraph
            <input
              type="radio"
              id="description"
              name="toggle"
              value="description"
              checked={newProject['display'] === 'description'}
              onChange={(e) => handleToggleView(e)}
            />
          </label>
          {newProject['display'] === 'description' && <>
            {TextArea()}
          </>}
          {newProject['display'] === 'bullet' && <>
            {BulletPoints()}
          </>}
        </fieldset>

        {newProject['display'] === 'bullet' &&
          <section className="new-bullet">
            <input ref={inputRef} type="text" placeholder="New Bullet Point" value={newBullet} onChange={(e) => setNewBullet(e.target.value)} maxLength="120" />
            <button type="button" className="add" onClick={() => handleAddNewBullet()} disabled={newBullet ? null : true}>Add Bullet Point</button>
          </section>}
  
      </section>
      <section className="button-container">
        <button className="cancel" type="button" onClick={() => setNewProjectFormVisible(false)}>Cancel</button>
        <button className="submit" type="submit">Submit</button>
      </section>
    </form>
  )
}

export default NewProjectForm;