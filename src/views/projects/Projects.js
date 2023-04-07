import { useEffect, useState } from "react";
import NewProjectForm from "./NewProjectForm";
import ProjectArticle from "./ProjectArticle";
import { v4 as uuid } from "uuid";

const Projects = () => {
  const [sectionEnabled, setSectionEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newProjectFormVisible, setNewProjectFormVisible] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: uuid(),
      year: '3000 - 3001',
      title: 'To-Do List',
      description: `Did the thing to track the things and then also did that other thing with the things which in the end turned out to be a very good thing and then when that was done i checked that everything was aligned properly`,
      url: 'https://mckensis.github.io/to-do-list',
      github: 'https://github.com/mckensis/to-do-list'
    },
    {
      id: uuid(),
      year: '3000 - 3001',
      title: 'To-Do List',
      description: `Did the thing to track the things and then also did that other thing with the things which in the end turned out to be a very good thing and then when that was done i checked that everything was aligned properly`,
      url: 'https://mckensis.github.io/to-do-list',
      github: 'https://github.com/mckensis/to-do-list'
    },
  ]);

  //Count how many entries in the section are currently in edit mode
  //Will help disable / enable the save section button
  const [countEditing, setCountEditing] = useState(0);

  useEffect(() => {
    if (projects.length > 0) {
      setSectionEnabled(true);
    }
  }, [projects.length]);

  const handleDeleteSection = () => {
    setSectionEnabled(false);
    setProjects([]);
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

      {sectionEnabled && <>
        {/* Heading */}
        <h2 className={isEditing ? "editing" : null}>Projects</h2>
        
        {/* Work Articles if there is any employment history to display */}
        {ProjectArticles()}

        {/* Delete section button */}
        {isEditing &&
          <button className="remove" onClick={() => handleDeleteSection()}>Delete</button>
        }

        {/* Edit section button */}
        {isHovering && !isEditing &&
          <button className="mode" onClick={() => setIsEditing(true)}>Edit</button>
        }

        {/* Save section button */}
        {isEditing ?
          countEditing === 0 ?
            <button className="mode" onClick={() => handleSaveSection()}>Save</button>
            : <button className="mode" disabled title="Save or delete any section entries currently in edit mode to save.">Save</button>
          : null
        }
        
        {/* Add work history button */}
        {isEditing && !newProjectFormVisible &&
          <button className="create" onClick={() => setNewProjectFormVisible(true)}>Add New Project</button>
        }

        {/* Add work history form */}
        {newProjectFormVisible && 
          <NewProjectForm
            projects={projects}
            setNewProjectFormVisible={setNewProjectFormVisible}
            setProjects={setProjects}
          />
        }
      </>}
      
      {/* Add work section button */}
      {!sectionEnabled &&
        <button className="add" onClick={() => setSectionEnabled(true)}>Add Projects Section</button>
      }
    </section>
  )
}

export default Projects;