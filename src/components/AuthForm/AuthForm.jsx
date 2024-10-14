import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import css from "./AuthForm.module.css"

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
    // const dispatch = useDispatch();

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
    //   dispatch(register(data)
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

  const onSubmit = (data) => {
    if (operationType === 'login') {
      console.log('Logging in with:', data);
    } else {
      console.log('Registering with:', data);
    }
    closeAuthModal();
  };

  return (
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

      <div>
        <input className={css.form_input}
          type="password" 
          {...register('password')}
         placeholder="Password" 
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit" className={css.modal_btn}>
        {operationType === 'login' ? 'Log In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default AuthForm