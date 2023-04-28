// @flow
import { withZod } from '@remix-validated-form/with-zod';
import * as React from 'react';
import { redirect } from 'remix-typedjson';
import { ValidatedForm, validationError } from 'remix-validated-form';
import { addProject } from '~/data/projects.server';
import type { ActionArgs } from '@remix-run/node';
import { z } from 'zod';

const validator = withZod(
  z.object({
    title: z.string().min(1, { message: "Title can't be empty" }),
    slug: z.string().min(1, { message: "Slug can't be empty" }),
    excerpt: z.string().min(1, { message: "Excerpt can't be empty" }),
    isFeatured: z.string().min(1, { message: "Is Featured can't be empty" }),
    githubURL: z.string().min(1, { message: "GitHub URL can't be empty" }),
    websiteURL: z.string().min(1, { message: "Website URL can't be empty" }),
    coverImage: z.string().min(1, { message: "Cover Image can't be empty" }),
    markdown: z.string().min(1, { message: "Markdown can't be empty" }),
  })
);
const AddProject = () => {
  const subjectFormValidator = validator;
  return (
    <main>
      <div className='row'>
        <h3>Add project</h3>
        <ValidatedForm validator={subjectFormValidator} method='post'>
          <div className='form-container'>
            <div className='form-item'>
              <label htmlFor='title'>Title *</label>
              <input
                placeholder='...'
                type='text'
                // {...register('email')}
                id='title'
                name='title'
                required
              />
            </div>
            <div className='form-item'>
              <label htmlFor='slug'>Slug *</label>
              <input
                placeholder='...'
                type='text'
                // {...register('email')}
                id='slug'
                name='slug'
              />
            </div>
            <div className='form-item'>
              <label htmlFor='excerpt'>Excerpt *</label>
              <input
                placeholder='...'
                type='text'
                // {...register('email')}
                id='excerpt'
                name='excerpt'
                required
              />
            </div>
            <div className='form-item'>
              <label htmlFor='isFeatured'>Is Featured *</label>
              <input
                placeholder='...'
                type='text'
                // {...register('email')}
                id='isFeatured'
                name='isFeatured'
                required
              />
            </div>
            <div className='form-item'>
              <label htmlFor='githubURL'>Github Link *</label>
              <input
                placeholder='...'
                type='text'
                // {...register('email')}
                id='githubURL'
                name='githubURL'
                required
              />
            </div>
            <div className='form-item'>
              <label htmlFor='websiteURL'>Website Link *</label>
              <input
                placeholder='...'
                type='text'
                // {...register('email')}
                id='websiteURL'
                name='websiteURL'
                required
              />
            </div>
            <div className='form-item'>
              <label htmlFor='coverImage'>Cover Image *</label>
              <input
                placeholder='...'
                type='text'
                // {...register('email')}
                id='coverImage'
                name='coverImage'
                required
              />
            </div>
            <div className='form-item'>
              <label htmlFor='markdown'>Content *</label>
              <textarea placeholder='Type your content...' name='markdown' id='markdown' />
            </div>
          </div>
          <div className='form-item'>
            <div className='u-center-text'>
              <button className='btn btn-primary'>Add project</button>
            </div>
          </div>
        </ValidatedForm>
      </div>
    </main>
  );
};

export const action = async ({ request }: ActionArgs) => {
  const fieldValues = await validator.validate(await request.formData());
  if (fieldValues.error) return validationError(fieldValues.error);
  const project = fieldValues.data;

  await addProject({ ...project, createdAt: new Date(), isFeatured: false });
  return redirect('/admin/projects');
};

export default AddProject;
