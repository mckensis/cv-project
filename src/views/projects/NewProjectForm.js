import { useState } from "react";
import { v4 as uuid } from "uuid";
import checkPopulated from "../../checkPopulated";

const NewProjectForm = ({ projects, setProjects, setNewProjectFormVisible }) => {

  const [newProject, setNewProject] = useState({
    id: uuid(),
    title: '',
    year: '',
    description: '',
    url: '',
    github: '',
  });

  const addNewProject = (e) => {
    e.preventDefault();

    if (!checkPopulated(newProject)) {
      return;
    }

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    setNewProjectFormVisible(false);
  }

  return (
    <form
      className="new"
      onSubmit={(e) => addNewProject(e)}
    >
      <label htmlFor="title" tabIndex={-1}>Project Title</label>
      <input
        autoFocus
        id="title"
        name="title"
        type="text"
        placeholder="Project Title"
        value={newProject['title']}
        onChange={(e) => setNewProject({...newProject, title: e.target.value})}
      />
      <label htmlFor="year" tabIndex={-1}>Date of Project</label>
      <input
        id="year"
        name="year"
        type="text"
        placeholder="Date of project"
        value={newProject['year']}
        onChange={(e) => setNewProject({...newProject, year: e.target.value})}
      />
      <label htmlFor="url" tabIndex={-1}>Project Url</label>
      <input
        id="url"
        name="url"
        type="text"
        placeholder="Project URL"
        value={newProject['url']}
        onChange={(e) => setNewProject({...newProject, url: e.target.value})}
      />
      <label htmlFor="github" tabIndex={-1}>GitHub Url</label>
      <input
        id="github"
        name="github"
        type="text"
        placeholder="GitHub URL"
        value={newProject['github']}
        onChange={(e) => setNewProject({...newProject, github: e.target.value})}
      />
      <label htmlFor="description" tabIndex={-1}>Description</label>
      <textarea
        name="description"
        id="description"
        rows="3"
        placeholder="Description of the Project"
        onChange={(e) => setNewProject({...newProject, description: e.target.value})}
        value={newProject['description']}
      >
      </textarea>
      <section className="button-container">
        <button className="cancel" type="button" onClick={() => setNewProjectFormVisible(false)}>Cancel</button>
        <button className="submit" type="submit">Submit</button>
      </section>
    </form>
  )
}

export default NewProjectForm;