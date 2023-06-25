// @flow
import { Link } from '@remix-run/react';
import * as React from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson/dist/remix';
import { ProjectList } from '~/components/project-list/project-list.component';
import { getAllProjects } from '~/data/projects.server';
type Props = {};

const Projects = (props: Props) => {
  const { projects } = useTypedLoaderData<typeof loader>();

  return (
    <section className='project-page'>
      <div className='row'>
        <h1 className='heading'>Projects</h1>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
};

export const loader = async () => {
  const projects = await getAllProjects();
  return typedjson({ projects });
};
export default Projects;
