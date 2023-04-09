import { useEffect, useState } from "react";
import EditPersonalForm from "./EditPersonalForm";

const Personal = () => {
  const [name, setName] = useState(
    localStorage.getItem('name') || 'Bort Simpsen'
  );
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem('phone') || '07890 123 456'
  );
  const [emailAddress, setEmailAddress] = useState(
    localStorage.getItem('email') || 'email@address.com'
  );
  const [website, setWebsite] = useState(
    localStorage.getItem('website') || 'https://example.com'
  );

  const [isHovering, setIsHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  // Update localStorage when any personal info changes
  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phoneNumber);
    localStorage.setItem('email', emailAddress);
    localStorage.setItem('website', website);
  }, [name, phoneNumber, emailAddress, website]);

  const PersonalDetails = () => {
    return (
      <>
      <h3>{name}</h3>
      <ul>
        <li>{phoneNumber}</li>
        <li><a href={`mailto:${emailAddress}`}>{emailAddress}</a></li>
        <li><a href={website} className="website">{website}</a></li>
      </ul>
      </>
    )
  }

  const EditForm = () => {
    return (
      <>
      <EditPersonalForm 
        name={name}
        setName={setName}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        emailAddress={emailAddress}
        setEmailAddress={setEmailAddress}
        website={website}
        setWebsite={setWebsite}
      />
      <button type="button" className="mode" onClick={() => setIsEditing(false)}>Save</button>
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