import css from './AuthNav.module.css'
// import { NavLink } from "react-router-dom";
import icons from '../../assets/sprite.svg';
// import clsx from 'clsx';
// const activeLinkClass = ({ isActive }) => {
//     return clsx(css.navLink, isActive && css.active);
// }
const AuthNav = () => {
  return (
    <div className={css.auth_wrapper}>
        <button type="button"  className={css.login_btn}>
            <svg width="20" height="20">
              <use href={`${icons}#login`} />
            </svg>
        Log In
      </button>
      <button type="button"  className={css.register_btn} >
        Registration
      </button>
      
    </div>
  )
}

export default AuthNav