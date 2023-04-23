// @flow
import type { LoaderArgs, MetaFunction, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import * as React from 'react';
import invariant from 'tiny-invariant';
import ReactMarkdown from 'react-markdown';
import { getPost } from '~/util/project-util';
import { getProject } from '~/data/projects.server';
type Props = {};

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.name, `params.slug is required`);
  const post = await getProject(params.name);
  invariant(post, `Post not found: ${params.slug}`);

  return json({ post });
};

export const ProjectDetailPage = (props: Props) => {
  const { post } = useLoaderData<typeof loader>();
  return (
    <main className='project-detail '>
      <div className='row'>
        <div className='container'>
          <div className='project--title'>
            <h1 className='heading heading__secondary u-center-text'>{post?.title}</h1>
          </div>

          <div className='project--references'>
            {post?.website && (
              <a target='_blank' rel='noopener noreferrer' href={post?.website} className='project--references__link'>
                Website
              </a>
            )}
            {post?.github && (
              <a target='_blank' rel='noopener noreferrer' href={post?.github} className='project--references__link'>
                Github
              </a>
            )}
          </div>
          <ReactMarkdown className='markdown'>{post.content}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
};

export const meta: V2_MetaFunction = ({ data }) => {
  return [
    {
      title: `Boucek Dev | ${data.post.slug}`,
    },
    {
      name: 'description',
      content: data.post.title,
    },
  ];
};

export default ProjectDetailPage;
