import { useState } from "react";
import EditWorkForm from "./EditWorkForm";

const WorkArticle = ({ workSingular, work, setWork, isEditing, countEditing, setCountEditing }) => {
  const [isEditingWorkArticle, setIsEditingWorkArticle] = useState(false);

  const handleEditArticle = () => {
    const count = countEditing + 1;
    setIsEditingWorkArticle(true);
    setCountEditing(count);
  }

  return (
    <article className="work-article">
      {!isEditingWorkArticle && <>
        <ul className="work-info">
          <li>{workSingular['year']}</li>
          <li>{workSingular['title']}</li>
          <li>{workSingular['company']}</li>
        </ul>
        <p>{workSingular['description']}</p>
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
          <EditWorkForm
            workSingular={workSingular}
            work={work}
            setWork={setWork}
            countEditing={countEditing}
            setCountEditing={setCountEditing}
            setIsEditingWorkArticle={setIsEditingWorkArticle}
          />
        </>}
      </article>
  )
}

export default WorkArticle;