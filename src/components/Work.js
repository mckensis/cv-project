import { useEffect, useState } from "react";
import NewWorkForm from "./NewWorkForm";
import WorkArticle from "./WorkArticle";
import { v4 as uuid } from "uuid";

const Work = () => {
  const [sectionEnabled, setSectionEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newWorkFormVisible, setNewWorkFormVisible] = useState(false);
  const [work, setWork] = useState([
    {
      id: uuid(),
      year: '3000 - 3001',
      company: 'The Company',
      jobTitle: 'Assistant Manager',
      description: `Counted sheep, interviewed vampires, cleaned yer da, placed my feet up, other made up things, lemon, ginger, garlic, tofu, broccoli, eggs, milk, cows, sheep, pigs, horses, etc.`
    },
    {
      id: uuid(),
      year: '1000 - 1999',
      company: 'A company',
      jobTitle: 'A job role',
      description: `Ate buffet food, made sandwiches, tickled your cat's toes, etc.`
    },
    {
      id: uuid(),
      year: '1000 - 1999',
      company: 'A company',
      jobTitle: 'A job role',
      description: `Ate buffet food, made sandwiches, tickled your cat's toes, etc.`
    },
  ]);

  //Count how many entries in the section are currently in edit mode
  //Will help disable / enable the save section button
  const [countEditing, setCountEditing] = useState(0);

  useEffect(() => {
    if (work.length > 0) {
      setSectionEnabled(true);
    }
  }, [work.length]);

  const handleDeleteSection = () => {
    setSectionEnabled(false);
    setWork([]);
  }

  const handleSaveSection = () => {
    setIsEditing(false);
    setNewWorkFormVisible(false);
  }

  //Create the work articles depending on the length of the work array
  const WorkArticles = () => {
    return work.length > 0 && work.map((item, idx) => (
      <WorkArticle
        key={item.id}
        work={work}
        setWork={setWork}
        isEditing={isEditing}
        item={item}
        setCountEditing={setCountEditing}
        countEditing={countEditing}
        index={idx}
      />
    ))
  }

  return (
    <section
      className="work"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >

      {sectionEnabled && <>
        {/* Heading */}
        {isEditing ? <h2 className="editing">Employment History</h2> : <h2>Employment History</h2>}
        
        {/* Work Articles if there is any employment history to display */}
        {WorkArticles()}

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
        {isEditing && !newWorkFormVisible &&
          <button className="create" onClick={() => setNewWorkFormVisible(true)}>Add New Work</button>
        }

        {/* Add work history form */}
        {newWorkFormVisible && 
          <NewWorkForm
            work={work}
            setNewWorkFormVisible={setNewWorkFormVisible}
            setWork={setWork}
          />
        }
      </>}
      
      {/* Add work section button */}
      {!sectionEnabled &&
        <button className="add" onClick={() => setSectionEnabled(true)}>Add Work Section</button>
      }
    </section>
  )
}

export default Work;