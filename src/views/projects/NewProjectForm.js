import { useState } from "react";
import { v4 as uuid } from "uuid";

const NewProjectForm = ({ projects, setProjects, setNewProjectFormVisible }) => {
  
  const [year, setYear] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [github, setGithub] = useState('');

  const addNewProject = (e) => {
    const newProject = { year, title, description, url, github, id: uuid() };
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    setNewProjectFormVisible(false);
  }

  return (
    <form
      className="project-form"
      onSubmit={(e) => addNewProject(e)}
    >
      <label htmlFor="title">Project Title</label>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="year">Date of Project</label>
      <input
        id="year"
        name="year"
        type="text"
        placeholder="Date of project"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
        autoFocus
      />
      <label htmlFor="url">Project Url</label>
      <input
        id="url"
        name="url"
        type="text"
        placeholder="Project URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <label htmlFor="github">GitHub Url</label>
      <input
        id="github"
        name="github"
        type="text"
        placeholder="GitHub URL"
        value={github}
        onChange={(e) => setGithub(e.target.value)}
        required
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        rows="3"
        placeholder="Description of the Project"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
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