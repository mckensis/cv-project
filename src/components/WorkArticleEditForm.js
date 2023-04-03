const WorkArticleEditForm = ({ 
  workYear, setWorkYear, workDescription, setWorkDescription,
  workTitle, setWorkTitle, workCompany, setWorkCompany }) => {

    return (
      <form className="work-item-edit-form" onSubmit={(e) => e.preventDefault()}>
        {/* Year input */}
        <label htmlFor="year" tabIndex={-1}>Date</label>
        <input
          type="text"
          name="year"
          id="year"
          value={workYear}
          onChange={(e) => setWorkYear(e.target.value)}
          autoFocus
          placeholder="Date from - to"
          minLength="1"
          maxLength="12"
        />
        {/* Job Title input */}
        <label htmlFor="job" tabIndex={-1}>Job Title</label>
        <input
          type="text"
          name="job"
          id="job"
          value={workTitle}
          onChange={(e) => setWorkTitle(e.target.value)}
          placeholder="Job Title"
          minLength="1"
          maxLength="20"
          />
        {/* Company input */}
        <label htmlFor="company" tabIndex={-1}>Company</label>
        <input
          type="text"
          name="company"
          id="company"
          minLength="1"
          maxLength="15"
          value={workCompany}
          onChange={(e) => setWorkCompany(e.target.value)}
          placeholder="Company Name"
        />
        {/* Description input */}
        <label htmlFor="description" tabIndex={-1}>Description</label>
        <textarea
          name="description"
          id="description"
          value={workDescription}
          onChange={(e) => setWorkDescription(e.target.value)}
          placeholder="Description of the job"
          minLength="1"
          maxLength="500"

        >
        </textarea>
      </form>
    )
}

export default WorkArticleEditForm;