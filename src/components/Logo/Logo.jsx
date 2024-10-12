import css from './Logo.module.css';
import icons from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
      <Link to="/" className={css.logo}>
          <svg width="28" height="28" >
            <use href={`${icons}#logo`} />
          </svg>
          <p>LearnLingo</p>
      </Link>
  )
}

export default Logo

