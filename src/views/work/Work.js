import { useState } from "react";
import NewWorkForm from "./NewWorkForm";
import WorkArticle from "./WorkArticle";
import { v4 as uuid } from "uuid";

const Work = ({ updatePreferences }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newWorkFormVisible, setNewWorkFormVisible] = useState(false);
  const [work, setWork] = useState(
    JSON.parse(localStorage.getItem('work'))
    || [
    {
      id: uuid(),
      year: '2014 - 2022',
      company: 'Stonegate',
      title: 'Assistant Manager',
      description: `This would be a description of the role, such as daily duties and things that were a main focus. I would probably also include things such as following the company values, training, and teamwork.`
    },
    {
      id: uuid(),
      year: '2012 - 2014',
      company: `Mum's Farm`,
      title: 'Egg Tester',
      description: `A second job description.`
    },
  ]);

  //Count how many entries in the section are currently in edit mode
  //Will help disable / enable the save section button
  const [countEditing, setCountEditing] = useState(0);

  const handleDeleteSection = () => {
    updatePreferences("work");
  }

  const handleSaveSection = () => {
    setIsEditing(false);
    setNewWorkFormVisible(false);
  }

  const handleDisplayForm = () => {
    setCountEditing(0);
    setNewWorkFormVisible(true);
  }

  //Create the work articles depending on the length of the work array
  const WorkArticles = () => {
    return work.length > 0 && work.map((item) => (
      <WorkArticle
        key={item.id}
        workSingular={item}
        work={work}
        setWork={setWork}
        isEditing={isEditing}
        countEditing={countEditing}
        setCountEditing={setCountEditing}
      />
    ))
  }

  return (
    <section
      className="work" onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
      <h2 className={isEditing ? "editing" : null}>Employment History</h2>
      
      {/* Work Articles if there is any employment history to display */}
      {!newWorkFormVisible && WorkArticles()}

      {isEditing && <>
        <button className="remove" onClick={() => handleDeleteSection()}>Delete</button>
        <button className="mode" title={countEditing === 0 ? null : "There are unsaved changes within this section"} disabled={countEditing === 0 ? null : true} onClick={() => handleSaveSection()}>Save</button>
      
        {!newWorkFormVisible &&
          <button className="create" onClick={() => handleDisplayForm()}>Add New Work</button>
        }

        {/* Add work history form */}
        {newWorkFormVisible && 
          <NewWorkForm
            work={work}
            setWork={setWork}
            setNewWorkFormVisible={setNewWorkFormVisible}
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

export default Work;