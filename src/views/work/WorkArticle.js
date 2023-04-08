import { useState } from "react";
import WorkArticleEditForm from "./WorkArticleEditForm";

const WorkArticle = ({ work, setWork, item, isEditing, setButtonEnabled, countEditing, setCountEditing }) => {
  const { year, company, jobTitle, description } = item;

  const [isEditingWorkArticle, setIsEditingWorkArticle] = useState(false);
  const [workYear, setWorkYear] = useState(year);
  const [workCompany, setWorkCompany] = useState(company);
  const [workTitle, setWorkTitle] = useState(jobTitle);
  const [workDescription, setWorkDescription] = useState(description);

  const handleDelete = () => {
    const count = countEditing - 1;
    setCountEditing(count);
    setWork(work.filter(element => element.id !== item.id));
  }

  const handleEditArticle = () => {
    const count = countEditing + 1;
    setIsEditingWorkArticle(true);
    setCountEditing(count);
  }

  const handleSave = (e) => {
    const count = countEditing - 1;
    setIsEditingWorkArticle(false);
    setCountEditing(count);
  }

  return (
    <article className="work-article">
      {!isEditingWorkArticle && <>
        <ul className="work-info">
          <li>{workYear}</li>
          <li>{workTitle}</li>
          <li>{workCompany}</li>
        </ul>
        <p>{workDescription}</p>
      </>}

        {/* Delete button for each item */}
        {isEditing && !isEditingWorkArticle && <>
          <button
            className="edit"
            type="button"
            onClick={() => handleEditArticle()}
          >
            Edit
          </button>
        </>}

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
            handleDelete={handleDelete}
            handleSave={handleSave}
          />
        </>}
      </article>
  )
}

export default WorkArticle;