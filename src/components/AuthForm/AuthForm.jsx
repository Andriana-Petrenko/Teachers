import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import css from "./AuthForm.module.css"
import { FiEyeOff, FiEye  } from "react-icons/fi";
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { loginUser, registerUser } from '../../redux/auth/operations';
import { selectError } from '../../redux/auth/selectors';


const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required')
});

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required')
});

const AuthForm = ({ operationType, closeAuthModal }) => {
  const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const dispatch = useDispatch();
  const error = useSelector(selectError);

    //  if (operationType === 'login') {
    //   dispatch(login(data))
    //     .unwrap()
    //     .then(() => {
    //       toast.success('You successfully login!');
    //       console.log('login:', data);
    //     })
    //     .catch(error => {
    //       toast.error('Failed to login!');
    //     });
    //   closeAuthModal();
    // } else {
    //   dispatch(register(data))
    //     .unwrap()
    //     .then(() => {
    //       toast.success('You successfully register!');
    //       console.log('register', water);
    //     })
    //     .catch(error => {
    //       toast.error('Failed register!');
    //     });
    //   closeAuthModal();
    // }


   const validationSchema = operationType === 'login' ? loginSchema : registerSchema;

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async ({email,password, name}) => {
    if (operationType === 'login') {
      // await signInWithEmailAndPassword(auth, email, password);
      // console.log('Logging in with:', email, password);
       dispatch(loginUser({email,password}))
        .unwrap()
        .then(() => {
          toast.success('You successfully login!');
          console.log('login:', {email,password});
        })
        .catch(error => {
          toast.error('Failed to login!', error);
        });
      closeAuthModal();
    } else {
        dispatch(registerUser({email,password,name}))
        .unwrap()
        .then(() => {
          toast.success('You successfully register!');
          console.log('register', {email,password,name});
        })
        .catch(error => {
          toast.error('Failed register!', error);
        });
      closeAuthModal();
    }
    closeAuthModal();
  };

  return (
 <>
          <form onSubmit={handleSubmit(onSubmit)} className={css.auth_form}>
{operationType === 'register' && (
        <>
          <div>
            <input className={css.form_input}
              type="text" 
              {...register('name')} 
               placeholder="Name" 
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
        </>
      )}
      <div>
        <input className={css.form_input}
          type="email" 
          {...register('email')} 
          placeholder="Email" 
        />
        {errors.email && <p>{errors.email.message}</p>} 
      </div>

      <div className={css.password_input_wrapper}>
        <input className={css.form_input}
          type={showPassword ? 'text' : 'password'} 
          {...register('password')}
         placeholder="Password" 
              />
        <span onClick={togglePasswordVisibility} className={css.toggle_password}>
          {showPassword ?  < FiEye size={20} />: <FiEyeOff size={20}/>}
        </span>
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit" className={css.modal_btn}>
        {operationType === 'login' ? 'Log In' : 'Sign Up'}
      </button>
    </form>
 </> 
  );
};

export default AuthForm