import { useState } from "react";

const Personal = () => {

  const [isHovering, setIsHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Aidan Madeupsurname');
  const [phoneNumber, setPhoneNumber] = useState('07890 123 456');
  const [emailAddress, setEmailAddress] = useState('email@address.com');
  const [website, setWebsite] = useState('https://example.com');

  const EditForm = () => {
    return <form onSubmit={(e) => e.preventDefault()}>
    <label htmlFor="name" tabIndex={-1}>Name</label>
    <input
      type="text"
      className="name"
      value={name}
      name="name"
      id="name"
      onChange={(e) => setName(e.target.value)}
      autoFocus
      placeholder="Full Name"
      maxLength="20"
      />
    {/* Phone number input */}
    <label htmlFor="contact" tabIndex={-1}>Name</label>
    <input
      type="text"
      className="contact"
      value={phoneNumber}
      name="contact"
      id="contact"
      maxLength="20"
      onChange={(e) => setPhoneNumber(e.target.value)}
      placeholder="Contact No."
      />
    {/* Email address input */}
    <label htmlFor="email" tabIndex={-1}>Name</label>
    <input
      type="text"
      className="email"
      value={emailAddress}
      name="email"
      id="email"
      maxLength="30"
      onChange={(e) => setEmailAddress(e.target.value)}
      placeholder="Email Address"
      />
    {/* Website input */}
    <label htmlFor="website" tabIndex={-1}>Name</label>
    <input
      type="text"
      className="website"
      value={website}
      name="website"
      id="website"
      maxLength="30"
      onChange={(e) => setWebsite(e.target.value)}
      placeholder="Website"
      />
  </form>
  }

  return (
    <section
      className="personal"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      {!isEditing && <>
        <h3>{name ? name : 'Name Surname'}</h3>
        <ul>
          <li className="contact">{phoneNumber ? phoneNumber : 'Phone Number'}</li>
          <li>
            {emailAddress ? <a href={`mailto:${emailAddress}`} className="email">{emailAddress}</a> : 'Email Address'}
          </li>
          <li>
            {website ? <a href={website} className="website">{website}</a> : 'Website URL'}
          </li>
        </ul>
      </>}

      {isEditing ? <>
        {EditForm()}
        <button type="button" className="mode" onClick={() => setIsEditing(false)}>Save</button>
      </> : null}

      {isHovering && !isEditing ?
        <button type="button" className="mode" onClick={() => setIsEditing(true)}>Edit</button>
        : null
      }
    </section>
  )
}

export default Personal;