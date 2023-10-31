// @flow
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { isRouteErrorResponse, useLoaderData, useParams, useRouteError } from '@remix-run/react';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import invariant from 'tiny-invariant';
import { Action } from '~/components/action/action.component';
import { getBlogPost } from '~/data/blogs.server';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Breadcrumbs from '~/components/breadcrumbs/breadcrumbs.component';
import moment from 'moment';
import { allowUserToUseFromCountry } from '~/data/auth.server';

const flatten = (text: string, child: any): any => {
  return typeof child === 'string' ? text + child : React.Children.toArray(child.props.children).reduce(flatten, text);
};

/**
 * HeadingRenderer is a custom renderer
 * It parses the heading and attaches an id to it to be used as an anchor
 */
const HeadingRenderer = (props: any) => {
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, '');
  const slug = text.toLowerCase().replace(/\W/g, '-');
  return React.createElement('h' + props.level, { id: slug }, props.children);
};

export const loader = async ({ params, request }: LoaderArgs) => {
  invariant(params.name, `params.slug is required`);
  allowUserToUseFromCountry(request);
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
          <Breadcrumbs />
          <div className='project__title'>
            <h1 className='heading heading__secondary'>{blogPost?.title}</h1>
            <div className='project__signature'>
              <img
                className='project__signature-image'
                src='https://res.cloudinary.com/boucekdev/image/upload/v1681952436/github/adam-boucek_rqohh1.jpg'
                alt='Adam Boucek profile'
              />
              <p className='caption--large--bold'>Adam Boucek</p>
              <span>|</span>
              <p className='caption--large--bold'>{moment(blogPost.createdAt).format('MMMM Do YYYY')}</p>
            </div>

            <div className='project__category'>
              {blogPost.categories.map((category: string, index: number) => (
                <span className='post-thumbnail__category-item p--medium--bold' key={index}>
                  {category}
                </span>
              ))}
            </div>
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
              h2: HeadingRenderer,
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
          <Action variant='secondary' as='link' to='/blog'>
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
