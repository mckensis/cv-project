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
        {(workSingular['year'] || workSingular['title'] || workSingular['company']) &&
          <ul className={workSingular['description'] ? "work-info" : "work-info condensed"}>
            {workSingular['title'] && <li className="primary">{workSingular['title']}</li>}
            {workSingular['company'] && <li>{workSingular['company']}</li>}
            {workSingular['year'] && <li>{workSingular['year']}</li>}
          </ul>
        }

        {/* The paragraph will span the entire section if no other info exists */}
        {workSingular['description'] &&
          <p className={(!workSingular['year'] && !workSingular['title'] && !workSingular['company']) ? 'maximised' : null}>{workSingular['description']}</p>}

        {isEditing &&
          <button className="edit" type="button" onClick={() => handleEditArticle()}>Edit</button>
        }
      </>}

      {isEditingWorkArticle && isEditing &&
        <EditWorkForm
          workSingular={workSingular}
          work={work}
          setWork={setWork}
          countEditing={countEditing}
          setCountEditing={setCountEditing}
          setIsEditingWorkArticle={setIsEditingWorkArticle}
        />
      }
    </article>
  )
}

export default WorkArticle;