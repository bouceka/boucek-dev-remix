// @flow
import * as React from 'react';
import { Action } from '~/components/action/action.component';
import type { ActionArgs } from '@remix-run/node';
import { z } from 'zod';
import { withZod } from '@remix-validated-form/with-zod';
import { ValidatedForm } from 'remix-validated-form';

const validator = withZod(
  z.object({
    email: z.string().email().min(1, { message: "Email can't be empty" }),
    password: z.string().min(1, { message: "Password can't be empty" }),
  })
);

const Login = () => {
  const subjectFormValidator = validator;

  return (
    <section className='section-contact'>
      <div className='row'>
        <h2 className='heading heading__secondary u-center-text'>Login</h2>
        <div className='form-container'>
          <ValidatedForm validator={subjectFormValidator} method='post'>
            <div className='form-item'>
              <label htmlFor='email'>Email</label>
              <input placeholder='Your email...' type='text' id='email' />
            </div>
            <div className='form-item'>
              <label htmlFor='password'>Password</label>
              <input placeholder='Your password...' type='password' id='password' />
            </div>
            <div className='form-item'>
              <div className='u-center-text'>
                <Action as='button' styleType='primary'>
                  Login
                </Action>
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
  const project = fieldValues.data;

  await addProject({ ...project, createdAt: new Date(), isFeatured: false });
  return redirect('/admin/projects');
};

export default Login;
