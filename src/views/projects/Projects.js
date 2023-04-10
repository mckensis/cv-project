import { useState } from "react";
import NewProjectForm from "./NewProjectForm";
import ProjectArticle from "./ProjectArticle";
import { v4 as uuid } from "uuid";

const Projects = ({ setProjectsSectionEnabled }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newProjectFormVisible, setNewProjectFormVisible] = useState(false);
  const [projects, setProjects] = useState(
    JSON.parse(localStorage.getItem('projects'))
    || [
    {
      id: uuid(),
      year: '2022 - 2023',
      title: 'Project One',
      description: `This is where I will put a description of this project, making sure to include the frameworks and languages I used such as React and Jest. I would talk about the development process and the challenges I faced during development, and how I overcame them.`,
      url: 'https://mckensis.github.io/',
      github: 'https://github.com/mckensis/'
    },
    {
      id: uuid(),
      year: '2021',
      title: 'Project Two',
      description: `This is where I would put information about a second project.`,
      url: 'https://mckensis.github.io/',
      github: 'https://github.com/mckensis/'
    },
  ]);


  //Count how many entries in the section are currently in edit mode
  //Will help disable / enable the save section button
  const [countEditing, setCountEditing] = useState(0);

  const handleDeleteSection = () => {
    setProjectsSectionEnabled(false);
  }

  const handleSaveSection = () => {
    setIsEditing(false);
    setNewProjectFormVisible(false);
  }

  //Create the work articles depending on the length of the work array
  const ProjectArticles = () => {
    return projects.length > 0 && projects.map((project, idx) => (
      <ProjectArticle
        key={project.id}
        projects={projects}
        setProjects={setProjects}
        isEditing={isEditing}
        project={project}
        setCountEditing={setCountEditing}
        countEditing={countEditing}
        index={idx}
      />
    ))
  }
  
  return (
    <section
      className="projects"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
    {/* Heading */}
    <h2 className={isEditing ? "editing" : null}>Projects</h2>   
    {/* Work Articles if there is any employment history to display */}
    {ProjectArticles()}
    {/* Delete and Save buttons */}
    {isEditing && <>
      <button className="remove" onClick={() => handleDeleteSection()}>Delete</button>      
      <button className="mode" title="There are unsaved changes within this section" onClick={() => handleSaveSection()} disabled={countEditing === 0 ? null : true}>Save</button>
      {newProjectFormVisible ?
        <NewProjectForm
          projects={projects}
          setNewProjectFormVisible={setNewProjectFormVisible}
          setProjects={setProjects}
        />
      : <button className="create" onClick={() => setNewProjectFormVisible(true)}>Add New Project</button>
      }    
    </>}

    {/* Edit section button */}
    {isHovering && !isEditing &&
      <button className="mode" onClick={() => setIsEditing(true)}>Edit</button>
    }
    </section>
  )
}

export default Projects;