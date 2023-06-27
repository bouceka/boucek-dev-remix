// @flow
import { withZod } from '@remix-validated-form/with-zod';
import * as React from 'react';
import { redirect } from 'remix-typedjson';
import { ValidatedForm, validationError } from 'remix-validated-form';
import { addProject } from '~/data/projects.server';
import type { ActionArgs, LoaderFunction } from '@remix-run/node';
import { z } from 'zod';
import { useTransition as useNavigate } from '@remix-run/react';
import { requireUserSession } from '~/data/auth.server';
import { mapToCategories } from '~/util/categories';

const validator = withZod(
  z.object({
    title: z.string().min(1, { message: "Title can't be empty" }),
    slug: z.string().min(1, { message: "Slug can't be empty" }),
    excerpt: z.string().min(1, { message: "Excerpt can't be empty" }),
    githubURL: z.string().min(1, { message: "GitHub URL can't be empty" }),
    websiteURL: z.string().min(1, { message: "Website URL can't be empty" }),
    coverImage: z.string().min(1, { message: "Cover Image can't be empty" }),
    markdown: z.string().min(1, { message: "Markdown can't be empty" }),
    categories: z.string().min(1, { message: "Categories can't be empty" }),
  })
);
const AddProject = () => {
  const subjectFormValidator = validator;
  const navigation = useNavigate();

  const isSubmitting = navigation.state === 'submitting';
  return (
    <main>
      <div className='row'>
        <h3>Add project</h3>
        <ValidatedForm validator={subjectFormValidator} method='post'>
          <div className='form-container'>
            <div className='form-item'>
              <label htmlFor='title'>Title *</label>
              <input placeholder='...' type='text' id='title' name='title' required />
            </div>
            <div className='form-item'>
              <label htmlFor='slug'>Slug *</label>
              <input placeholder='...' type='text' id='slug' name='slug' />
            </div>
            <div className='form-item'>
              <label htmlFor='excerpt'>Excerpt *</label>
              <input placeholder='...' type='text' id='excerpt' name='excerpt' required />
            </div>
            <div className='form-item'>
              <label htmlFor='isFeatured'>Is Featured *</label>
              <input placeholder='...' type='text' id='isFeatured' name='isFeatured' required />
            </div>
            <div className='form-item'>
              <label htmlFor='githubURL'>Github Link</label>
              <input placeholder='...' type='text' id='githubURL' name='githubURL' />
            </div>
            <div className='form-item'>
              <label htmlFor='websiteURL'>Website Link</label>
              <input placeholder='...' type='text' id='websiteURL' name='websiteURL' />
            </div>
            <div className='form-item'>
              <label htmlFor='coverImage'>Cover Image *</label>
              <input placeholder='...' type='text' id='coverImage' name='coverImage' required />
            </div>
            <div className='form-item'>
              <label htmlFor='markdown'>Content *</label>
              <textarea placeholder='Type your content...' name='markdown' id='markdown' />
            </div>
          </div>
          <div className='form-item'>
            <label htmlFor='categories'>Categories</label>
            <textarea placeholder='Type your content...' name='categories' id='categories' />
          </div>
          <div className='form-item'>
            <div className='u-center-text'>
              <button disabled={isSubmitting} className='btn btn-primary'>
                {isSubmitting ? 'Adding' : 'Add project'}
              </button>
            </div>
          </div>
        </ValidatedForm>
      </div>
    </main>
  );
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserSession(request);
  return null;
};

export const action = async ({ request }: ActionArgs) => {
  const fieldValues = await validator.validate(await request.formData());
  if (fieldValues.error) return validationError(fieldValues.error);
  const project = fieldValues.data;
  const userId = await requireUserSession(request);

  await addProject({
    ...project,
    categories: mapToCategories(project.categories),
    createdAt: new Date(),
    updatedAt: new Date(),
    userId,
  });
  return redirect('/admin/project');
};

export default AddProject;
