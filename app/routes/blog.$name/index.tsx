// @flow
import { LoaderArgs, V2_MetaFunction, json } from '@remix-run/node';
import { isRouteErrorResponse, useLoaderData, useParams, useRouteError } from '@remix-run/react';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import invariant from 'tiny-invariant';
import { Action } from '~/components/action/action.component';
import { getBlogPost } from '~/data/blogs.server';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.name, `params.slug is required`);
  const blogPost = await getBlogPost(params.name);
  if (!blogPost) {
    throw json({ message: 'Could not find any blog post' }, { status: 404, statusText: 'Not Found' });
  }

  return json({ blogPost });
};

export const BlogDetailPage = () => {
  const { blogPost } = useLoaderData<typeof loader>();
  return (
    <main className='project-detail '>
      <div className='row'>
        <div className='container'>
          <div className='project--title'>
            <h1 className='heading heading__secondary u-center-text'>{blogPost?.title}</h1>
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
            {blogPost.markdown}
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
          <Action styleType='secondary' as='link' to='/blog'>
            Back to Blog
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
      title: `Boucek Dev | ${data.blogPost?.slug}`,
    },
    {
      name: 'description',
      content: data.blogPost?.title,
    },
  ];
};

export default BlogDetailPage;