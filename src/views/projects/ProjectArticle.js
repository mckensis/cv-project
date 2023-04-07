import { useState } from "react";
import ProjectArticleEditForm from "./ProjectArticleEditForm";

const ProjectArticle = ({ projects, setProjects, project, isEditing, countEditing, setCountEditing }) => {
  const { year, title, description, url, github } = project;

  const [isEditingProjectArticle, setIsEditingProjectArticle] = useState(false);
  const [projectYear, setProjectYear] = useState(year);
  const [projectTitle, setProjectTitle] = useState(title);
  const [projectDescription, setProjectDescription] = useState(description);
  const [projectUrl, setProjectUrl] = useState(url);
  const [projectGithub, setProjectGithub] = useState(github);

  const handleDelete = () => {
    const count = countEditing - 1;
    setCountEditing(count);
    setProjects(projects.filter(element => element.id !== project.id));
  }

  const handleEditArticle = () => {
    const count = countEditing + 1;
    setIsEditingProjectArticle(true);
    setCountEditing(count);
  }

  const handleSave = (e) => {
    const count = countEditing - 1;
    setIsEditingProjectArticle(false);
    setCountEditing(count);
  }

  return (
    <article className="project-article">
      {!isEditingProjectArticle && <>
        <section className="project-info">
          <h3>{projectTitle}</h3>
          <p>{projectYear}</p>
        </section>
        <ul className="project-links">
          <li><a href={projectUrl}>View live</a></li>
          <li><a href={projectGithub}>View code</a></li>
        </ul>
        <p>{projectDescription}</p>
      </>}

        {/* Delete button for each item */}
        {isEditing && !isEditingProjectArticle && <>
          <button
            className="edit"
            type="button"
            onClick={() => handleEditArticle()}
          >
            Edit
          </button>
        </>}

        {isEditing && isEditingProjectArticle && <>
          <ProjectArticleEditForm
            projectYear={projectYear}
            setProjectYear={setProjectYear}
            projectTitle={projectTitle}
            setProjectTitle={setProjectTitle}
            projectDescription={projectDescription}
            setProjectDescription={setProjectDescription}
            projectUrl={projectUrl}
            setProjectUrl={setProjectUrl}
            projectGithub={projectGithub}
            setProjectGithub={setProjectGithub}
            setIsEditingProjectArticle={setIsEditingProjectArticle}
            handleDelete={handleDelete}
            handleSave={handleSave}
          />
        </>}
      </article>
  )
}

export default ProjectArticle;