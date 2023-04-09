const EditPersonalForm =
  ({ name, setName, phoneNumber, setPhoneNumber,
  emailAddress, setEmailAddress, website, setWebsite }) => {  
    
    return (
      <form onSubmit={(e) => e.preventDefault()}>
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
          maxLength="25"
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
    )
}

export default EditPersonalForm;