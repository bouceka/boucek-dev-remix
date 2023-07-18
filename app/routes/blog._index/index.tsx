// @flow
import type { LoaderFunction, V2_MetaFunction } from '@remix-run/node';
import * as React from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson/dist/remix';
import Breadcrumbs from '~/components/breadcrumbs/breadcrumbs.component';
import { ProjectList } from '~/components/project-list/project-list.component';
import { allowUserToUseFromCountry } from '~/data/auth.server';
import { getAllBlogPosts } from '~/data/blogs.server';

const Blogs = () => {
  const { blogPosts } = useTypedLoaderData<typeof loader>();
  return (
    <section className='project-page'>
      <div className='row'>
        <Breadcrumbs />
        <h1 className='heading'>Blog</h1>
        <ProjectList projects={blogPosts} />
      </div>
    </section>
  );
};

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Boucek Dev | Blog Page',
    },
    {
      name: 'description',
      content: 'Explore my blog posts that are about coding, designing, and new technologies.',
    },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  allowUserToUseFromCountry(request);
  const blogPosts = await getAllBlogPosts();
  return typedjson({ blogPosts });
};

export default Blogs;
