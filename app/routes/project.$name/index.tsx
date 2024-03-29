// @flow
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { isRouteErrorResponse, useLoaderData, useParams, useRouteError } from '@remix-run/react';
import * as React from 'react';
import invariant from 'tiny-invariant';
import ReactMarkdown from 'react-markdown';
import { getProject } from '~/data/projects.server';
import { Action } from '~/components/action/action.component';
import SyntaxHighlighter from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Breadcrumbs from '~/components/breadcrumbs/breadcrumbs.component';
import moment from 'moment';

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
          <Breadcrumbs />
          <div className='project__title'>
            <h1 className='heading heading__secondary'>{project?.title}</h1>
            <div className='project__signature'>
              <img
                className='project__signature-image'
                src='https://res.cloudinary.com/boucekdev/image/upload/v1681952436/github/adam-boucek_rqohh1.jpg'
                alt='Adam Boucek profile'
              />
              <p className='caption--large--bold'>Adam Boucek</p>
              <span>|</span>
              <p className='caption--large--bold'>{moment(project.createdAt).format('MMMM Do YYYY')}</p>
            </div>

            <div className='project__category'>
              {project.categories.map((category: string, index: number) => (
                <span className='post-thumbnail__category-item p--medium--bold' key={index}>
                  {category}
                </span>
              ))}
            </div>
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

          <ReactMarkdown
            className='markdown'
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, '')}
                    style={dracula}
                    language={match[1]}
                    PreTag='div'
                  />
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {project.markdown}
          </ReactMarkdown>
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
