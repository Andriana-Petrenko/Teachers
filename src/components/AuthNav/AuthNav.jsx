import css from './AuthNav.module.css'
// import { NavLink } from "react-router-dom";


import icons from '../../assets/sprite.svg';
import { useEffect, useState } from 'react';
import AuthModal from '../AuthModal/AuthModal';
import { logoutUser } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
// import clsx from 'clsx';
// const activeLinkClass = ({ isActive }) => {
//     return clsx(css.navLink, isActive && css.active);
// }
const AuthNav = () => {

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [operationType, setOperationType] = useState('login');
 
  const onCloseAuthModal = () => {
    setShowAuthModal(false);
  }; 

const onOpenAuthModal = (type) => {
  setOperationType(type);
  setShowAuthModal(true);
  };

  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
 
  useEffect(() => {
     const colors = [
    'var(--accent-blue)', 'var(--accent-blue-white)', 'var(--accent-pink)',  'var(--accent-pink-white)', 'var(--accent-yellow)' 
  ];
      const interval = setInterval(() => {
         setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      document.documentElement.style.setProperty('--color3', colors[currentColorIndex]);
    }, 2000); 

    return () => clearInterval(interval);
  }, [currentColorIndex]);


  return (
    <>
       {isLoggedIn ? (
                <button type="button" className={css.register_btn} onClick={() => dispatch(logoutUser())}>Logout</button>
              ) : (
      <div className={css.auth_wrapper}>
          <button type="button"  className={css.login_btn} onClick={() => onOpenAuthModal('login')}> 
              <svg width="20" height="20">
                <use href={`${icons}#login`} />
              </svg>
          Log In
        </button>
            <button type="button" className={css.register_btn} onClick={() => onOpenAuthModal('register')}>
          Registration
        </button>
          <AuthModal modalOpen={showAuthModal} closeModal={onCloseAuthModal} operationType={operationType} />
    </div>)}
    </>
  )
}

export default AuthNav