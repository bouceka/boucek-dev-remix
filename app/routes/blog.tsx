// @flow
import * as React from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson/dist/remix';
import { ProjectList } from '~/components/project-list/project-list.component';
import { getAllProjects } from '~/data/projects.server';

const Blogs = () => {
  const { projects } = useTypedLoaderData<typeof loader>();
  return (
    <section className='project-page'>
      <div className='row'>
        <h1 className='heading'>Blogs</h1>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
};

export const loader = async () => {
  const projects = await getAllProjects();
  return typedjson({ projects });
};

export default Blogs;
