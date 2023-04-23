import { json, MetaFunction } from '@remix-run/node';
import { useLoaderData, type V2_MetaFunction } from '@remix-run/react';
import Header from '~/components/header/header.component';
import { ProjectList } from '~/components/project-list/project-list.component';
import { getAllProjects } from '~/data/projects.server';

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <>
      <Header />
      <ProjectList projects={posts} />
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
  const posts = await getAllProjects();
  return json({ posts });
};
