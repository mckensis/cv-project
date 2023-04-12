import { useEffect, useState } from "react";
import EditPersonalForm from "./EditPersonalForm";

const Personal = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState(
    JSON.parse(localStorage.getItem('info')) 
    || {
      name: 'Bort Simpsen',
      subtitle: 'Front End Developer',
      phone: '07890 123 456',
      website: 'https://www.example.com',
      email: 'email@address.com',
      location: 'Glasgow, Scotland'
    }
  );

  const handleUpdateDetails = () => {
    localStorage.setItem('info', JSON.stringify(info));
    setIsEditing(false);
  }

  const PersonalDetails = () => {
    return (
      <>
      <ul>
        <li><h3>{info['name'] ? info['name'] : 'Full Name'}</h3></li>
        {info['subtitle'] && <li><h4>{info['subtitle']}</h4></li>}
      </ul>

      {(info['phone'] || info['email'] || info['website'] || info['location']) &&      
      <ul>
        {info['phone'] && <li key="phone">{info['phone']}</li>}
        {info['email'] &&<li key="email"><a href={`mailto:${info['email']}`}>{info.email}</a></li>}
        {info['website'] && <li key="website"><a href={info['website']}>{info['website']}</a></li>}
        {info['location'] && <li key="location">{info['location']}</li>}
      </ul>}
      </>
    )
  }

  const EditForm = () => {
    return (
      <>
      <EditPersonalForm
        info={info}
        setInfo={setInfo}
      />
      <button type="button" className="mode" onClick={() => handleUpdateDetails()}>Save</button>
      </>
    )
  }

  return (
    <section className="personal" onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
      {!isEditing && PersonalDetails()}
      {isEditing && EditForm()}

      {isHovering && !isEditing &&
        <button type="button" className="mode" onClick={() => setIsEditing(true)}>Edit</button>
      }
    </section>
  )
}

export default Personal;