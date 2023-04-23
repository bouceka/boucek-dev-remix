import { json } from '@remix-run/node';
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
  return [{ title: 'New Remix App' }];
};

export const loader = async () => {
  const posts = await getAllProjects();
  return json({ posts });
};
