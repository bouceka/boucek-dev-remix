/* eslint-disable no-console */
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

type FormValue = {
  name: string;
  email: string;
  message: string;
  phoneNumber: string;
};

const schema = yup.object().shape({
  email: yup.string().required().email(),
  message: yup.string().max(250).required(),
  name: yup.string().required(),
  phoneNumber: yup.string().optional(),
});

export const Contact: React.FC = () => {
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
      <ToastContainer />
      <div className='row'>
        <h2 className='heading heading__secondary u-center-text'>Contact</h2>
        <div className='form-container'>
          <form
            onSubmit={handleSubmit((data: any) => {
              emailjs.send('service_9vm5aje', 'template_jfv8cwg', data, 'n4VZ7A68TO9QOKC5Y').then(
                (result: any) => {
                  toast.success('Form submitted');
                  reset();
                },
                (error: any) => {
                  console.log(error);
                }
              );
            })}
          >
            <div className='form-item'>
              <label htmlFor='name'>Name *</label>
              <input
                className={errors.name ? 'error' : ''}
                placeholder='Your name...'
                type='text'
                {...register('name', { required: true })}
                id='name'
              />
              {errors.name?.message && <p className='error__message'>Name is a required field</p>}
            </div>
            <div className='form-item'>
              <label htmlFor='email'>Email Address *</label>
              <input
                className={errors.email ? 'error' : ''}
                placeholder='Your email address...'
                type='text'
                {...register('email')}
                id='email'
              />
              {errors.email?.message && <p className='error__message'>Email is a required field</p>}
            </div>
            <div className='form-item'>
              <label htmlFor='message'>Message *</label>
              <textarea
                className={errors.message ? 'error' : ''}
                placeholder='Type your message here...'
                {...register('message', { required: true })}
                id='message'
              />
              {errors.message?.message && <p className='error__message'>Message is a required field</p>}
            </div>

            <div className='form-item'>
              <label htmlFor='phoneNumber'>Phone Number</label>
              <input
                className={errors.phoneNumber ? 'error' : ''}
                placeholder='Your phone number...'
                type='text'
                {...register('phoneNumber')}
                id='phoneNumber'
              />
            </div>
            <div className='form-item'>
              <div className='u-center-text'>
                <button className='btn btn-primary'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
