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

  useEffect(() => {
    if (work.length > 0) {
      setSectionEnabled(true);
    }
  }, [work]);

  const handleDeleteSection = () => {
    setSectionEnabled(false);
    setWork([]);
  }

  const handleSaveSection = () => {
    setIsEditing(false);
    setNewWorkFormVisible(false);
  }

  return (
    <section
      className="work"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >

      {sectionEnabled && <>
        {isEditing ? 
          <h2 className="editing">Employment History</h2> : <h2>Employment History</h2>
        }
  
        {/* If there is any education to display */}
        {work.length > 0 &&
          work.map((item) => (
            <WorkArticle
              key={item.id}
              work={work}
              setWork={setWork}
              isEditing={isEditing}
              item={item}
            />
          ))
        }

        {isEditing &&
          <button className="remove" onClick={() => handleDeleteSection()}>Delete</button>
        }
        {isHovering && !isEditing &&
          <button className="mode" onClick={() => setIsEditing(true)}>Edit</button>
        }
        {isEditing &&
          <button className="mode" onClick={() => handleSaveSection()}>Save</button>
        }
        {isEditing && !newWorkFormVisible &&
          <button className="create" onClick={() => setNewWorkFormVisible(true)}>Add New Work</button>
        }

        {newWorkFormVisible && 
          <NewWorkForm
            work={work}
            setNewWorkFormVisible={setNewWorkFormVisible}
            setWork={setWork}
          />
        }
      </>}

      {!sectionEnabled &&
        <button className="add" onClick={() => setSectionEnabled(true)}>Add Work Section</button>
      }
    </section>
  )
}

export default Work;