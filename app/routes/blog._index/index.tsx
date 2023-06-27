// @flow
import * as React from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson/dist/remix';
import Breadcrumbs from '~/components/breadcrumbs/breadcrumbs.component';
import { ProjectList } from '~/components/project-list/project-list.component';
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

export const loader = async () => {
  const blogPosts = await getAllBlogPosts();
  return typedjson({ blogPosts });
};

export default Blogs;
