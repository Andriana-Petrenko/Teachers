import { nanoid } from 'nanoid'
import TeachersItem from '../TeachersItem/TeachersItem'
import css from "./TeachersList.module.css"
const TeachersList = ({teachers}) => {
  return (
    <ul className={css.teachers_list}>
        {teachers.map(item => (
          <li key={nanoid()} className={css.item}>
            <TeachersItem teacher={item} />
          </li>
        ))}
      </ul>
  )
}

export default TeachersList
