// @flow
import * as React from 'react';
import { Action } from '~/components/action/action.component';
import { redirect, type ActionArgs } from '@remix-run/node';
import { z } from 'zod';
import { withZod } from '@remix-validated-form/with-zod';
import { ValidatedForm, validationError } from 'remix-validated-form';
import { addProject } from '~/data/projects.server';
import { useActionData } from '@remix-run/react';
import { login, signup } from '~/data/auth.server';

const validator = withZod(
  z.object({
    email: z.string().email().min(1, { message: "Email can't be empty" }),
    password: z.string().min(1, { message: "Password can't be empty" }),
  })
);

const Auth = () => {
  const subjectFormValidator = validator;
  return (
    <section className='section-contact'>
      <div className='row'>
        <h2 className='heading heading__secondary u-center-text'>Login</h2>
        <div className='form-container'>
          <ValidatedForm validator={subjectFormValidator} method='post'>
            <div className='form-item'>
              <label htmlFor='email'>Email</label>
              <input placeholder='Your email...' name='email' type='text' id='email' />
            </div>
            <div className='form-item'>
              <label htmlFor='password'>Password</label>
              <input placeholder='Your password...' name='password' type='password' id='password' />
            </div>
            <div className='form-item'>
              <div className='u-center-text'>
                <Action styleType='primary'>Login</Action>
              </div>
            </div>
          </ValidatedForm>
        </div>
      </div>
    </section>
  );
};

export const action = async ({ request }: ActionArgs) => {
  const fieldValues = await validator.validate(await request.formData());
  if (fieldValues.error) return validationError(fieldValues.error);

  const credentials = fieldValues.data;
  return await login(credentials.email, credentials.password);
};

export default Auth;
