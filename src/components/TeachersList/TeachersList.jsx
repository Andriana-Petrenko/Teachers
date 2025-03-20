import { useSelector } from 'react-redux';
import TeachersItem from '../TeachersItem/TeachersItem'
import css from "./TeachersList.module.css"
import { selectTeachers } from '../../redux/teachers/selectors';
import { nanoid } from 'nanoid';

const TeachersList = () => {
  const teachers = useSelector(selectTeachers);
  return (
    <ul className={css.teachers_list}>
        {teachers.map(teacher => (
          <li key={nanoid()} className={css.item}>
            <TeachersItem teacher={teacher} />
          </li>
        ))}
      </ul>
  )
}

export default TeachersList
