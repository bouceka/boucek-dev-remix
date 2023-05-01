// @flow
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { isRouteErrorResponse, useCatch, useLoaderData, useParams, useRouteError } from '@remix-run/react';
import * as React from 'react';
import invariant from 'tiny-invariant';
import ReactMarkdown from 'react-markdown';
import { getProject } from '~/data/projects.server';
import { Action } from '~/components/action/action.component';

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.name, `params.slug is required`);
  const project = await getProject(params.name);
  if (!project) {
    throw json({ message: 'Could not find any project' }, { status: 404, statusText: 'Not Found' });
  }

  return json({ project });
};

export const ProjectDetailPage = () => {
  const { project } = useLoaderData<typeof loader>();
  return (
    <main className='project-detail '>
      <div className='row'>
        <div className='container'>
          <div className='project--title'>
            <h1 className='heading heading__secondary u-center-text'>{project?.title}</h1>
          </div>

          <div className='project--references'>
            {project?.websiteURL && (
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={project?.websiteURL}
                className='project--references__link'
              >
                Website
              </a>
            )}
            {project?.githubURL && (
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={project?.githubURL}
                className='project--references__link'
              >
                Github
              </a>
            )}
          </div>
          <ReactMarkdown className='markdown'>{project.markdown}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
};

export function ErrorBoundary() {
  const error = useRouteError();
  const params = useParams();
  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className='project-detail '>
        <div className='row'>
          <div className=''>Uh oh! The post with the slug "{params.name}" does not exist!</div>
          <Action styleType='secondary' as='link' to='/#section-projects'>
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
export const meta: V2_MetaFunction = ({ data }) => {
  if (!data) {
    return [{ title: `Boucek Dev | Error` }, { name: 'description' }];
  }
  return [
    {
      title: `Boucek Dev | ${data.project?.slug}`,
    },
    {
      name: 'description',
      content: data.project?.title,
    },
  ];
};

export default ProjectDetailPage;
