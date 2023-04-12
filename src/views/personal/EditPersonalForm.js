const EditPersonalForm =
  ({ info, setInfo }) => {  
    
    return (
      <form className="personal-details" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name" tabIndex={-1}>Name</label>
        <input
          className="primary"
          autoFocus
          type="text"
          id="name"
          name="name"
          maxLength="25"
          placeholder="Full Name"
          value={info['name']}
          onChange={(e) => setInfo({...info, name: e.target.value})}
        />
        <label htmlFor="subtitle" tabIndex={-1}>Subtitle</label>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          maxLength="30"
          placeholder="Subtitle"
          value={info['subtitle']}
          onChange={(e) => setInfo({...info, subtitle: e.target.value})}
        />
        {/* Phone number input */}
        <label htmlFor="contact" tabIndex={-1}>Contact Number</label>
        <input
          type="text"
          id="contact"
          name="contact"
          maxLength="20"
          placeholder="Contact No."
          value={info['phone']}
          onChange={(e) => setInfo({...info, phone: e.target.value})}
        />
        {/* Email address input */}
        <label htmlFor="email" tabIndex={-1}>Email Address</label>
        <input
          type="text"
          name="email"
          id="email"
          maxLength="30"
          placeholder="Email Address"
          value={info['email']}
          onChange={(e) => setInfo({...info, email: e.target.value})}
        />
        {/* Website input */}
        <label htmlFor="website" tabIndex={-1}>Website</label>
        <input
          type="text"
          name="website"
          id="website"
          maxLength="30"
          placeholder="Website"
          value={info['website']}
          onChange={(e) => setInfo({...info, website: e.target.value})}
        />
        <label htmlFor="location" tabIndex={-1}>Location</label>
        <input
          type="text"
          name="location"
          id="location"
          maxLength="30"
          placeholder="Location"
          value={info['location']}
          onChange={(e) => setInfo({...info, location: e.target.value})}
        />
      </form>
    )
}

export default EditPersonalForm;