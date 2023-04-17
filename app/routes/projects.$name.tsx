// @flow
import type { LoaderArgs} from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import * as React from 'react';
import invariant from 'tiny-invariant';
import ReactMarkdown from 'react-markdown';
import { getPostData } from '~/util/project-util.server';
type Props = {};

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.name, `params.slug is required`);
  const post = getPostData(params.name);
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

// export function meta() {
//   return {
//     title: 'RemixExpenses - The Complete App',
//     description: 'Manage your expenses with ease.',
//   };
// }

export default ProjectDetailPage;
