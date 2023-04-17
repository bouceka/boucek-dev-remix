import { json } from '@remix-run/node';
import { Link, useLoaderData, type V2_MetaFunction } from '@remix-run/react';
import Header from '~/components/header/header.component';
import { ProjectList } from '~/components/project-list/project-list.component';
import { getPosts } from '~/util/project-util';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }];
};

export const loader = async () => {
  const posts = await getPosts();

  return json({ posts });
};

export default function Index() {
   const { posts } = useLoaderData<typeof loader>();
  return (
    <>
      <Header />
      <ProjectList projects={posts} />
    </>
  );
}
