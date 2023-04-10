import { useState } from "react";
import EditProjectForm from "./EditProjectForm";

const ProjectArticle = ({ project, projects, setProjects, isEditing, countEditing, setCountEditing }) => {
  const [isEditingProjectArticle, setIsEditingProjectArticle] = useState(false);

  const handleEditArticle = () => {
    const count = countEditing + 1;
    setIsEditingProjectArticle(true);
    setCountEditing(count);
  }

  return (
    <article className="project-article">
      {!isEditingProjectArticle && <>
        <section className="project-info">
          <h3>{project['title']}</h3>
          <p>{project['year']}</p>
        </section>

        {/* If either of the links exist, create elements for them */}
        {(project['url'] || project['github']) && 
          <ul className="project-links">
            {project['url'] ? <li><a href={project['url']}>View live</a></li> : null}
            {project['github'] ? <li><a href={project['github']}>View code</a></li> : null}
          </ul>
        }
        <p>{project['description']}</p>
      </>}

      {/* Edit button for each item */}
      {!isEditingProjectArticle && isEditing &&  <button className="edit" type="button" onClick={() => handleEditArticle()}>Edit</button>}

      {/* Article Edit Form */}
      {isEditingProjectArticle && isEditing && <>
        <EditProjectForm
          project={project}
          projects={projects}
          setProjects={setProjects}
          countEditing={countEditing}
          setCountEditing={setCountEditing}
          setIsEditingProjectArticle={setIsEditingProjectArticle}
        />
      </>}
    </article>
  )
}

export default ProjectArticle;