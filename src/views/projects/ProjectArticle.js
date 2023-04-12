import { useState } from "react";
import EditProjectForm from "./EditProjectForm";
import { v4 as uuid } from "uuid";

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
        {(project['title'] || project['year']) &&
          <section className="project-info">
          {project['title'] && <h3>{project['title']}</h3>}
          {project['year'] && <p>({project['year']})</p>}
        </section>
        }

        {/* If either of the links exist, create elements for them */}
        {(project['url'] || project['github']) && 
          <ul className="project-links">
            {project['url'] ? <li><a href={project['url']}>View live</a></li> : null}
            {project['github'] ? <li><a href={project['github']}>View code</a></li> : null}
          </ul>
        }
        {project['tags'] && 
          <ul className="tags">
            {project['tags'].map((tag, index) => (
              <li key={`${project['id']}-${tag}`}>{index !== project['tags'].length -1 ? `${tag},\u00A0` : `${tag}`}</li>
            ))}
          </ul>
        }

        {(project['display'] === 'bullet') && project['process'] && 
          <ul className="process">
            {project['process'].map((item) => (
              <li key={`${project['id']}${uuid()}`}>{item}</li>
            ))}
          </ul>
        }

        {(project['display'] === 'description') && project['description'] &&
          <p className="secondary">{project['description']}</p>}
      </>}

      {/* Edit button for each item */}
      {!isEditingProjectArticle && isEditing &&  
        <section className="button-container">
          <button className="edit" type="button" onClick={() => handleEditArticle()} title={countEditing === 0 ? null : "Save any unsaved changes before editing this project"} disabled={countEditing === 0 ? null : true}>Edit</button>
        </section>}

      {/* Article Edit Form */}
      {isEditingProjectArticle && isEditing && <>
        <EditProjectForm
          key={`${project.id}-EditForm`}
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