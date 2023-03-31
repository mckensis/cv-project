import { useState } from "react";
import WorkArticleEditForm from "./WorkArticleEditForm";

const WorkArticle = ({ work, setWork, item, isEditing }) => {
  const { year, company, jobTitle, description } = item;

  const [isEditingWorkArticle, setIsEditingWorkArticle] = useState(false);
  const [workYear, setWorkYear] = useState(year);
  const [workCompany, setWorkCompany] = useState(company);
  const [workTitle, setWorkTitle] = useState(jobTitle);
  const [workDescription, setWorkDescription] = useState(description);

  //Why is this deleting the wrong item
  const handleDelete = () => {
    setWork(work.filter(element => element.id !== item.id));
  }

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditingWorkArticle(false);
  }

  return (
    <article className="work-article">
      {!isEditingWorkArticle && <>
        <section className="work-section">
        <p>{workYear}</p>
        <p>{workTitle}</p>
        <p>{workCompany}</p>
        </section>
        <p>{workDescription}</p>
      </>}

        {/* Delete button for each item */}
        {isEditing && !isEditingWorkArticle && <>
          <button
            className="edit work-item"
            type="button"
            onClick={() => setIsEditingWorkArticle(true)}
          >
            Edit
          </button>
        </>
        }

        {isEditing && isEditingWorkArticle && <>
          <WorkArticleEditForm
            workYear={workYear}
            setWorkYear={setWorkYear}
            workTitle={workTitle}
            setWorkTitle={setWorkTitle}
            workDescription={workDescription}
            setWorkDescription={setWorkDescription}
            workCompany={workCompany}
            setWorkCompany={setWorkCompany}
            setIsEditingWorkArticle={setIsEditingWorkArticle}
          />
          <button
            className="save work-item"
            type="button"
            onClick={(e) => handleSave(e)}
          >
            Save
          </button>
          <button
            className="delete work-item"
            type="button"
            onClick={() => handleDelete()}
            >
            Delete
          </button>
        </>}
      </article>
  )
}

export default WorkArticle;