import { useState } from "react";
import NewProjectForm from "./NewProjectForm";
import ProjectArticle from "./ProjectArticle";
import { v4 as uuid } from "uuid";

const Projects = ({ updatePreferences }) => {
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
      tags: ["React", "Jest", "Node", "Express"],
      display: 'bullet',
      process: [
        {
          id: uuid(),
          value: "I designed and built this CRUD application in order to prioritise tasks and categorise them into lists",
        },
        {
          id: uuid(),
          value: "CRUD functionality allows creation, editing, and deletion of lists and tasks",
        },
        {
          id: uuid(),
          value: "Used localStorage to store data between sessions",
        },
        {
          id: uuid(),
          value: "Utilised Webpack to bundle all files into a miniature file size and organise my code"
        },
      ],
      description: `This is where I will put a description of this project, making sure to include the frameworks and languages I used such as React and Jest. I would talk about the development process and the challenges I faced during development, and how I overcame them.`,
      url: 'https://mckensis.github.io/',
      github: 'https://github.com/mckensis/'
    },
    {
      id: uuid(),
      year: '2021',
      title: 'Project Two',
      tags: ['Java', 'C++', 'Python'],
      display: 'description',
      description: `This is where I would put information about a second project.`,
      url: 'https://mckensis.github.io/',
      github: 'https://github.com/mckensis/'
    },
  ]);

  //Count how many entries in the section are currently in edit mode
  //Will help disable / enable the save section button
  const [countEditing, setCountEditing] = useState(0);

  const handleDisplayForm = () => {
    setCountEditing(0);
    setNewProjectFormVisible(true);
  }

  const handleDeleteSection = () => {
    updatePreferences("projects");
  }

  const handleSaveSection = () => {
    setIsEditing(false);
    setNewProjectFormVisible(false);
  }

  //Create the work articles depending on the length of the work array
  const ProjectArticles = () => {
    return projects.length > 0 && projects.map((project) => (
      <ProjectArticle
        key={project.id}
        project={project}
        projects={projects}
        setProjects={setProjects}
        isEditing={isEditing}
        countEditing={countEditing}
        setCountEditing={setCountEditing}
      />
    ))
  }
  
  return (
    <section
      className="projects"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <h2 className={isEditing ? "editing" : null}>Projects</h2>   
      
      {/* Work Articles if there is any employment history to display */}
      {!newProjectFormVisible && ProjectArticles()}

      {isEditing && <>
        <button className="remove" onClick={() => handleDeleteSection()}>Delete</button>      
        <button className="mode" title={countEditing === 0 ? null : "There are unsaved changes within this section"} onClick={() => handleSaveSection()} disabled={countEditing === 0 ? null : true}>Save</button>

        {!newProjectFormVisible &&
          <button className="create" onClick={() => handleDisplayForm()}>Add New Project</button>
        }
        
        {/* Add project form */}
        {newProjectFormVisible &&
          <NewProjectForm
            projects={projects}
            setProjects={setProjects}
            setNewProjectFormVisible={setNewProjectFormVisible}
          />
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