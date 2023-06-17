// @flow
import * as React from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson/dist/remix';
import { ProjectList } from '~/components/project-list/project-list.component';
import { getAllBlogPosts } from '~/data/blogs.server';
import { getAllProjects } from '~/data/projects.server';

const Blogs = () => {
  const { blogPosts } = useTypedLoaderData<typeof loader>();
  return (
    <section className='project-page'>
      <div className='row'>
        <h1 className='heading'>Blogs</h1>
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
