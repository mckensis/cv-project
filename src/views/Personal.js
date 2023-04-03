import { useState } from "react";

const Personal = () => {

  const [isHovering, setIsHovering] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [website, setWebsite] = useState('');

  return (
    <section
      className="personal"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      {!isEditing
        && <>
        <p className="name">{name ? name : 'Name Surname'}</p>
        <p className="contact">{phoneNumber ? phoneNumber : '07890 123 456'}</p>
        <p className="email">{emailAddress ? emailAddress : 'email@address.com'}</p>
        <p className="website">{website ? website : 'https://www.website.com'}</p>
        </>
      }

      {isEditing
        && <>
          {/* Name input */}
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
        </>
      }

      {isHovering && !isEditing ?
        <button className="mode" onClick={() => setIsEditing(true)}>Edit</button>
        : null
      }
      {isEditing && <button className="mode" onClick={() => setIsEditing(false)}>Save</button>}
    </section>
  )
}

export default Personal;