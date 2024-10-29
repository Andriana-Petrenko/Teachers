import { useState } from "react";
import css from "./TeachersItem.module.css"
import icons from '../../assets/sprite.svg';
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourites/selectors";
import { toggleFavourite } from "../../redux/favourites/slice";


const TeachersItem = ({ teacher }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const dispatch = useDispatch();
   const favourites = useSelector(selectFavourites);
   const isFavourite = Array.isArray(favourites) && favourites.includes(teacher.id);

  const handleToggleFavourite = () => {
    dispatch(toggleFavourite(teacher.surname));
  };
    const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };
  return (
      <>
          <div className={css.photo_wrapper}>
            <img className={css.photo} src={teacher.avatar_url} alt={teacher.name} width="96" height="96" />      
          </div>
          <div className={css.info_wrapper}>
              <div>
                  <p>Languages:</p>
                  <span>Lessons online</span>
                  <p>Lessons done: {teacher.lessons_done}</p>
                  <p>
                      <svg width="16" height="16" >
                           <use href={`${icons}#rating`} />
                      </svg>
                      Rating: {teacher.rating}</p>
                   <p>Price / 1 hour: <span className={css.green}>{teacher.price_per_hour} $</span></p>
                    <svg
              width="26"
              height="26" className={css.heard_icon}
              onClick={handleToggleFavourite}
              fill={isFavourite ? "#e44848" : "#101828"}
              cursor='pointer'>
              <use href={`${icons}#heard`} />
            </svg>
              </div>
              <div>{teacher.name} {teacher.surname}</div>
              <p>Speaks: <span>{teacher.languages.join(', ')}</span></p>
              <p>Lesson Info: <span>{teacher.lesson_info}</span></p>
              <p>Conditions: <span>{teacher.conditions.join(' ')}</span></p>
            
      {isExpanded && (
            <div className="card-body">
                      <p>{teacher.experience}</p>
                      
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