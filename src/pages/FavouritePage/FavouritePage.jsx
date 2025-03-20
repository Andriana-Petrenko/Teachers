import { useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourites/selectors";
import css from "./FavouritePage.module.css"
import { selectTeachers } from "../../redux/teachers/selectors";
import TeachersList from "../../components/TeachersList/TeachersList";

const FavouritePage = () => {
    const favourites = useSelector(selectFavourites);
    const teachers = useSelector(selectTeachers);

    const favouriteTeachers = teachers.filter(teacher => favourites.includes(teacher.id));

  return (
      <div className={css.favourite_wrapper}>
          <h2 className={css.favourite_title}>Your Favourites</h2>
          <div className={css.favourite_list}><TeachersList teachers={favouriteTeachers} /></div>
      </div>
  )
}

export default FavouritePage