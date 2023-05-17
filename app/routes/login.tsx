// @flow
import * as React from 'react';
import { Action } from '~/components/action/action.component';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValue = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().max(10).min(6).required(),
});

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValue>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });

  return (
    <section className='section-contact'>
      <div className='row'>
        <h2 className='heading heading__secondary u-center-text'>Login</h2>
        <div className='form-container'>
          <form onSubmit={handleSubmit((data: any) => {})}>
            <div className='form-item'>
              <label htmlFor='email'>Email</label>
              <input
                className={errors.email ? 'error' : ''}
                placeholder='Your email...'
                type='text'
                {...register('email')}
                id='email'
              />
              {errors.email?.message && <p className='error__message'>Email is a required field</p>}
            </div>
            <div className='form-item'>
              <label htmlFor='password'>Password</label>
              <input
                className={errors.email ? 'error' : ''}
                placeholder='Your password...'
                type='password'
                {...register('password')}
                id='password'
              />
              {errors.password?.message && <p className='error__message'>Password is a required field</p>}
            </div>
            <div className='form-item'>
              <div className='u-center-text'>
                <Action as='button' styleType='primary'>
                  Login
                </Action>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
