import { useState } from "react";
import EditAboutForm from "./EditAboutForm";

const About = ({ setAboutSectionEnabled }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState(
    localStorage.getItem('details')
    || `This is where I'll put a small summary about myself. I'll make it concise and only include important information, such as how much I love working on my own but also as part of a team. I would also write something about how organised and friendly I am.`
  );

  const EditForm = () => {
    return (
      <EditAboutForm
        details={details}
        setDetails={setDetails}
        setIsEditing={setIsEditing}
        setAboutSectionEnabled={setAboutSectionEnabled}
      />
    )
  }

  return (
    <section
      className="about"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      {/* Heading */}
      <h2 className={isEditing ? "editing" : null}>About Me</h2>

      {/* Content */}
      {!isEditing ? <p>{details}</p> : EditForm()}

      {/* Edit button */}
      {isHovering && !isEditing &&
        <button className="mode" onClick={() => setIsEditing(true)}>Edit</button>
      }

    </section>
  )
}

export default About;