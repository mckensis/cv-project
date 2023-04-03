import { useEffect, useState } from "react";

const About = () => {
  const [sectionEnabled, setSectionEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState('I like the things.');

  useEffect(() => {
    if (details.length > 0) {
      setSectionEnabled(true);
    }
  }, [details.length]);

  const handleDeleteSection = () => {
    setSectionEnabled(false);
    setDetails('');
  }

  const handleSaveSection = () => {
    setIsEditing(false);
  }

  return (
    <section
      className="about"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      {sectionEnabled && <>
        {/* Heading */}
        <h2 className={isEditing ? "editing" : null}>About Me</h2>

        {/* Section content */}
        {!isEditing && <p>{details}</p>}

        {/* Delete / Save buttons and textarea for updating the section */}
        {isEditing ? <>

          <button className="remove" onClick={() => handleDeleteSection()}>Delete</button>
          <button className="mode" onClick={() => handleSaveSection()}>Save</button>

          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="about">About</label>
            <textarea
              type="text" 
              name="about"
              id="about"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Enter information about yourself here"
              maxLength="300"
            >
            </textarea>
          </form>
          </> : <></>
        }

        {/* Edit section button */}
        {isHovering && !isEditing &&
          <button className="mode" onClick={() => setIsEditing(true)}>Edit</button>
        }
      </>}
      
      {/* Add education section button */}
      {!sectionEnabled &&
        <button className="add" onClick={() => setSectionEnabled(true)}>Add Personal Section</button>
      }
    </section>
  )
}

export default About;