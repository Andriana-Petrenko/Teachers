import css from './AuthNav.module.css'
// import { NavLink } from "react-router-dom";

import icons from '../../assets/sprite.svg';
import { useState } from 'react';
import AuthModal from '../AuthModal/AuthModal';
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

  return (
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
    </div>
  )
}

export default AuthNav