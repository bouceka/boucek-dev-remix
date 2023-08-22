// @flow
import { withZod } from '@remix-validated-form/with-zod';
import * as React from 'react';
import { redirect } from 'remix-typedjson';
import { ValidatedForm, validationError } from 'remix-validated-form';
import type { LoaderArgs } from '@remix-run/node';
import { json, type ActionFunction } from '@remix-run/node';
import { z } from 'zod';
import { Action } from '~/components/action/action.component';
import { requireUserSession } from '~/data/auth.server';
import { Modal } from '~/components/modal/modal.component';
import { isRouteErrorResponse, useLoaderData, useParams, useRouteError, useSubmit } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { prisma } from '~/data/db.server';
import { deleteProject, getProject, updateProject } from '~/data/projects.server';
import { mapFromCategories, mapToCategories } from '~/util/categories';

const validator = withZod(
  z.object({
    title: z.string().min(1, { message: "Title can't be empty" }),
    slug: z.string().min(1, { message: "Slug can't be empty" }),
    excerpt: z.string().min(1, { message: "Excerpt can't be empty" }),
    coverImage: z.string().min(1, { message: "Cover Image can't be empty" }),
    markdown: z.string().min(1, { message: "Markdown can't be empty" }),
    githubURL: z.string().nullable(), // TODO: Show validation errors on the form
    websiteURL: z.string().nullable(),
    categories: z.string().min(1, { message: "Categories can't be empty" }),
  })
);

export const loader = async ({ request, params }: LoaderArgs) => {
  await requireUserSession(request);
  invariant(params.id, `params.slug is required`);
  const project = await getProject(params.id);

  if (!project) {
    throw json({ message: 'Could not find any blog post' }, { status: 404, statusText: 'Not Found' });
  }

  return json({ project });
};

const AdminProjectEdit = () => {
  const subjectFormValidator = validator;
  const [openModal, setOpenModal] = React.useState(false);
  const submit = useSubmit();
  const { project } = useLoaderData<typeof loader>();
  return (
    <>
      <Modal
        primaryBtnContent='Delete'
        primaryAction={async (id) => {
          submit(null, { method: 'delete' });
          setOpenModal(false);
        }}
        secondaryBtnContent='Cancel'
        secondaryAction={() => setOpenModal(false)}
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={`Are you sure you want to delete this project.`}
      />
      <main>
        <div className='row'>
          <h3>Add project</h3>
          <ValidatedForm validator={subjectFormValidator} method='patch'>
            <div className='form-container'>
              <div className='form-item'>
                <label htmlFor='title'>Title *</label>
                <input placeholder='...' type='text' defaultValue={project.title} id='title' name='title' required />
              </div>
              <div className='form-item'>
                <label htmlFor='slug'>Slug *</label>
                <input placeholder='...' type='text' defaultValue={project.slug} id='slug' name='slug' />
              </div>
              <div className='form-item'>
                <label htmlFor='excerpt'>Excerpt *</label>
                <input
                  placeholder='...'
                  type='text'
                  defaultValue={project.excerpt}
                  id='excerpt'
                  name='excerpt'
                  required
                />
              </div>
              <div className='form-item'>
                <label htmlFor='coverImage'>Cover Image *</label>
                <input
                  placeholder='...'
                  type='text'
                  defaultValue={project.coverImage}
                  id='coverImage'
                  name='coverImage'
                  required
                />
              </div>
              <div className='form-item'>
                <label htmlFor='githubURL'>Github Link</label>
                <input
                  placeholder='...'
                  defaultValue={project.githubURL ?? ''}
                  type='text'
                  id='githubURL'
                  name='githubURL'
                />
              </div>
              <div className='form-item'>
                <label htmlFor='websiteURL'>Website Link</label>
                <input
                  placeholder='...'
                  defaultValue={project.websiteURL ?? ''}
                  type='text'
                  id='websiteURL'
                  name='websiteURL'
                />
              </div>
              <div className='form-item'>
                <label htmlFor='markdown'>Content *</label>
                <textarea
                  placeholder='Type your content...'
                  defaultValue={project.markdown}
                  name='markdown'
                  id='markdown'
                />
              </div>
							<div className='form-item'>
                <label htmlFor='categories'>Categories</label>
                <input
                  type='text'
                  placeholder='Type your content...'
                  defaultValue={mapFromCategories(project.categories)}
                  name='categories'
                  id='categories'
                />
              </div>
            </div>
            <div className='form-item'>
              <div className='u-center-text'>
                <Action as='button' variant='primary'>
                  Update project
                </Action>
              </div>
            </div>
          </ValidatedForm>
          <div className='form-item'>
            <div className='u-center-text'>
              <button className='admin-table__btn-delete' onClick={() => setOpenModal(true)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const action: ActionFunction = async ({ request, params }) => {
  const userId = await requireUserSession(request);
  const form = await request.formData();
  const project = await prisma.project.findFirst({
    where: { slug: params.id },
  });
  invariant(params.id, `params.id is required`);
  if (!project) {
    throw new Response("Can't change what does not exist", { status: 404 });
  }

  if (request.method === 'DELETE') {
    await deleteProject(project.id);
    return redirect(`/admin/project`);
  }

  if (request.method === 'PATCH') {
    const fieldValues = await validator.validate(form);
    if (fieldValues.error) return validationError(fieldValues.error);
    const projectData = fieldValues.data;
    await updateProject({
      ...projectData,
      createdAt: project.createdAt,
      id: project.id,
      userId,
			categories: mapToCategories(projectData.categories),
      updatedAt: new Date(),
    });
    return redirect(`/admin/project`);
  }
};

export function ErrorBoundary() {
  const error = useRouteError();
  const params = useParams();
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className='project-detail '>
        <div className='row'>
          <div className=''>Uh oh! The post with the slug "{params.name}" does not exist!</div>
          <Action variant='secondary' as='link' to='/#section-projects'>
            Back to Projects
          </Action>
        </div>
      </main>
    );
  }

  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
    </div>
  );
}

export default AdminProjectEdit;
