const ProjectArticleEditForm = ({ 
  projectYear, setProjectYear, projectDescription, setProjectDescription,
  handleDelete, handleSave,
  projectTitle, setProjectTitle, projectUrl, setProjectUrl,
  projectGithub, setProjectGithub }) => {

    return (
      <form className="project-item-edit-form" onSubmit={(e) => e.preventDefault()}>
        <section className="form-container">
        {/* Title input */}
        <label htmlFor="job" tabIndex={-1}>Project Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          placeholder="Project Title"
          minLength="1"
          maxLength="20"
        />
        {/* Date input */}
        <label htmlFor="year" tabIndex={-1}>Date</label>
        <input
          type="text"
          name="year"
          id="year"
          value={projectYear}
          onChange={(e) => setProjectYear(e.target.value)}
          autoFocus
          placeholder="Date of Project"
          minLength="1"
          maxLength="12"
        />
        {/* URL input */}
        <label htmlFor="url" tabIndex={-1}>Live Url</label>
        <input
          type="text"
          name="url"
          id="url"
          minLength="1"
          maxLength="15"
          value={projectUrl}
          onChange={(e) => setProjectUrl(e.target.value)}
          placeholder="Live URL"
        />
        {/* Github URL input */}
        <label htmlFor="github" tabIndex={-1}>GitHub Url</label>
        <input
          type="text"
          name="github"
          id="github"
          minLength="1"
          maxLength="15"
          value={projectGithub}
          onChange={(e) => setProjectGithub(e.target.value)}
          placeholder="GitHub URL"
        />
        {/* Description input */}
        <label htmlFor="description" tabIndex={-1}>Description</label>
        <textarea
          name="description"
          id="description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          placeholder="Description of the Project"
          minLength="1"
          maxLength="500"  
        >
        </textarea>
          </section>
          <section className="button-container">
            <button
              className="delete cancel"
              type="button"
              onClick={() => handleDelete()}
            >
              Delete
            </button>
            
            <button
              className="save submit"
              type="button"
              onClick={(e) => handleSave(e)}
            >
              Save
            </button>
          </section>
      </form>
    )
}

export default ProjectArticleEditForm;