import AuthForm from "../AuthForm/AuthForm";
import Modal from "../Modal/Modal"
import css from "./AuthModal.module.css"
const AuthModal = ({modalOpen, closeModal, operationType}) => {
  const title =
    operationType === 'login' ? 'Log In' : 'Registration';
  const text =
    operationType === 'login' ? 'Welcome back! Please enter your credentials to access your account and continue your search for an teacher.' : 'Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information';
  return (
    <Modal modalIsOpen={modalOpen} closeModal={closeModal}>
      <div>
        <h1 className={css.modal_title}>{title}</h1>
        <p className={css.modal_text}>{text}</p>
        <AuthForm
          operationType={operationType}
          closeAuthModal={closeModal}
        />
      </div>
    </Modal>
  )
}

export default AuthModal