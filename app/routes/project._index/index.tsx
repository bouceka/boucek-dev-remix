// @flow
import type { LoaderFunction, V2_MetaFunction } from '@remix-run/node';
import * as React from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson/dist/remix';
import Breadcrumbs from '~/components/breadcrumbs/breadcrumbs.component';
import { Pagination } from '~/components/pagination/pagination.component';
import { ProjectList } from '~/components/project-list/project-list.component';
import { allowUserToUseFromCountry } from '~/data/auth.server';
import { getAllProjects } from '~/data/projects.server';

const Projects = () => {
  const { projects } = useTypedLoaderData<typeof loader>();

  return (
    <section className='project-page'>
      <div className='row'>
        <Breadcrumbs />
        <h1 className='heading'>Projects</h1>
        <ProjectList projects={projects} />

      </div>
    </section>
  );
};

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Boucek Dev | Projects',
    },
    {
      name: 'description',
      content:
        'Explore my projects that are about coding, designing, and new technologies.',
    },
  ];
};


export const loader:LoaderFunction = async ({request}) => {
  allowUserToUseFromCountry(request);
  const projects = await getAllProjects();
  return typedjson({ projects });
};
export default Projects;
