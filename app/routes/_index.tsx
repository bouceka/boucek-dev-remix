import { type V2_MetaFunction } from '@remix-run/react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';
import Header from '~/components/header/header.component';
import { ProjectList } from '~/components/project-list/project-list.component';
import { getAllProjects } from '~/data/projects.server';

export default function Index() {
  const { projects } = useTypedLoaderData<typeof loader>();
  return (
    <>
      <Header />
      <ProjectList projects={projects} />
    </>
  );
}

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Boucek Dev',
    },
    {
      name: 'description',
      content:
        'Adam is a Full Stack Developer who is passionate in aiding others around the world through delightful apps.',
    },
  ];
};

export const loader = async () => {
  const projects = await getAllProjects();
  return typedjson({ projects });
};
