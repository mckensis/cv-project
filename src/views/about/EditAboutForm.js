const EditAboutForm = ({ details, setDetails, setIsEditing, updatePreferences }) => {
  const handleDeleteSection = () => {
    updatePreferences("about");
  }

  const handleSaveSection = (e) => {
    e.preventDefault();
    localStorage.setItem('details', details);
    setIsEditing(false);
  }
  
  return (
    <form onSubmit={(e) => handleSaveSection(e)}>
      <label htmlFor="about" tabIndex={-1}>About</label>
      <textarea
        type="text"
        name="about"
        id="about"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Enter information about yourself here"
        maxLength="1000"
      />
      <button type="button" className="remove" onClick={() => handleDeleteSection()}>Delete</button>
      <button type="submit" className="mode">Save</button>
    </form>

  )
}

export default EditAboutForm;