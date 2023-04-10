import { useState } from "react";

const EditProjectForm = ({
  project, projects, setProjects,
  countEditing, setCountEditing, setIsEditingProjectArticle }) => {

  const [tempProject, setTempProject] = useState({...project});

  const handleDelete = () => {
    const count = countEditing - 1;
    setCountEditing(count);
    setProjects(projects.filter(element => element.id !== tempProject.id));
    localStorage.setItem('projects', JSON.stringify(projects.filter(element => element.id !== tempProject.id)));
  }

  const handleSave = () => {
    const foundProject = projects.find((item) => item.id === tempProject.id);
    if (!foundProject) {
      return;
    }
    
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

    return (
      <form className="edit" onSubmit={(e) => e.preventDefault()}>
        <section className="form-container">
        {/* Title input */}
        <label htmlFor="job" tabIndex={-1}>Project Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={tempProject['title']}
          onChange={(e) => setTempProject({...tempProject, title: e.target.value })}
          placeholder="Project Title"
          maxLength="20"
        />
        {/* Date input */}
        <label htmlFor="year" tabIndex={-1}>Date</label>
        <input
          type="text"
          name="year"
          id="year"
          value={tempProject['year']}
          onChange={(e) => setTempProject({...tempProject, year: e.target.value})}
          autoFocus
          placeholder="Date of Project"
          maxLength="18"
        />
        {/* URL input */}
        <label htmlFor="url" tabIndex={-1}>Live Url</label>
        <input
          type="text"
          name="url"
          id="url"
          maxLength="35"
          value={tempProject['url']}
          onChange={(e) => setTempProject({...tempProject, url: e.target.value})}
          placeholder="Live URL"
        />
        {/* Github URL input */}
        <label htmlFor="github" tabIndex={-1}>GitHub Url</label>
        <input
          type="text"
          name="github"
          id="github"
          maxLength="35"
          value={tempProject['github']}
          onChange={(e) => setTempProject({...tempProject, github: e.target.value})}
          placeholder="GitHub URL"
        />
        {/* Description input */}
        <label htmlFor="description" tabIndex={-1}>Description</label>
        <textarea
          name="description"
          id="description"
          value={tempProject['description']}
          onChange={(e) => setTempProject({...tempProject, description: e.target.value})}
          placeholder="Description of the Project"
          minLength="1"
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

export default EditProjectForm;