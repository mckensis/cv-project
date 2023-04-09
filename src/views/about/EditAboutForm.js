const EditAboutForm = ({ details, setDetails, setAboutSectionEnabled, setIsEditing }) => {
  const handleDeleteSection = () => {
    setAboutSectionEnabled(false);
    setDetails('');
  }

  const handleSaveSection = () => {
    localStorage.setItem('details', details);
    setIsEditing(false);
  }
  
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="about" tabIndex={-1}>About</label>
      <textarea
        type="text"
        name="about"
        id="about"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Enter information about yourself here"
        maxLength="300"
      />
      <button type="button" className="remove" onClick={() => handleDeleteSection()}>Delete</button>
      <button type="submit" className="mode" onClick={() => handleSaveSection()}>Save</button>
    </form>

  )
}

export default EditAboutForm;