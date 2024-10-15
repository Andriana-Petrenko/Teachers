import { useState } from "react";
import css from "./TeachersItem.module.css"



const TeachersItem = ({ teacher }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };
  return (
      <>
          <div className={css.photo_wrapper}>
            <img className={css.photo} src={teacher.avatar_url} alt={teacher.name} width="96" height="96" />      
          </div>
          <div className={css.info_wrapper}>
              <p>Languages:</p> 
              <div>{teacher.name} {teacher.surname}</div>
              <p>Speaks: <span>{teacher.languages.join(', ')}</span></p>
              <p>Lesson Info: <span>{teacher.lesson_info}</span></p>
              <p>Conditions: <span>{teacher.conditions.join(' ')}</span></p>
            
      {isExpanded && (
            <div className="card-body">
                      <p>{teacher.experience}</p>
                      <p>Number of Lessons: {teacher.lessonsDone}</p>
                      <p>Rating: {teacher.rating}</p>
          <div className="reviews">
            {teacher.reviews.map((review, index) => (
              <div key={index} className="review">
                <p><strong>{review.name}</strong> rated {review.rating}</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {!isExpanded && (<button className={css.read_btn} onClick={toggleCard} type="button"> Read more</button>)}
       <ul className={css.teacher_levels}>
      {teacher.levels.map((level, index) => (
        <li key={index} className={css.level_item}>{level}</li>
      ))}
    </ul>
      {isExpanded && (<button className={css.lesson_button} type="button"> Book trial lesson</button>)}      
          </div>

          
      </>
  )
}

export default TeachersItem