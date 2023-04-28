// @flow
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import * as React from 'react';
import invariant from 'tiny-invariant';
import ReactMarkdown from 'react-markdown';
import { getProject } from '~/data/projects.server';

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.name, `params.slug is required`);
  const project = await getProject(params.name);
  invariant(project, `Project not found: ${params.slug}`);

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
              <a target='_blank' rel='noopener noreferrer' href={project?.websiteURL} className='project--references__link'>
                Website
              </a>
            )}
            {project?.githubURL && (
              <a target='_blank' rel='noopener noreferrer' href={project?.githubURL} className='project--references__link'>
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

export const meta: V2_MetaFunction = ({ data }) => {
  return [
    {
      title: `Boucek Dev | ${data.project.slug}`,
    },
    {
      name: 'description',
      content: data.project.title,
    },
  ];
};

export default ProjectDetailPage;
