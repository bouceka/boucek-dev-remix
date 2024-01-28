// @flow
import type { LoaderFunction, V2_MetaFunction } from '@remix-run/node';
import * as React from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson/dist/remix';
import Breadcrumbs from '~/components/breadcrumbs/breadcrumbs.component';
import { Pagination } from '~/components/pagination/pagination.component';
import { ProjectList } from '~/components/project-list/project-list.component';
import { allowUserToUseFromCountry } from '~/data/auth.server';
import { getAllBlogPosts, getCountBlogPost } from '~/data/blogs.server';
import { PER_PAGE } from '~/util/constants';



const Blogs = () => {
  const { blogPosts } = useTypedLoaderData<typeof loader>();
  const { count } = useTypedLoaderData<typeof loader>();

  const totalPage = Math.ceil(count / PER_PAGE);

  return (
    <section className='project-page'>
      <div className='row'>
        <Breadcrumbs />
        <h1 className='heading'>Blog</h1>
        <ProjectList projects={blogPosts} />
        <p style={{marginTop: '1.6rem' }}>
          Displaying {blogPosts.length} items of {count}
        </p>
        {count > PER_PAGE ? <Pagination totalPages={totalPage} /> : ''}
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
  const url = new URL(request.url);
  const query = url.searchParams;
  const currentPage = Math.max(Number(query.get('page') || 1), 1);
  const options = {
    take: PER_PAGE,
    skip: (currentPage - 1) * PER_PAGE,
    orderBy: {
      updatedAt: 'desc',
    },
  };

  const [blogPosts, count] = await Promise.all([getAllBlogPosts(options), getCountBlogPost()]);
  return typedjson({ blogPosts, count });
};

export default Blogs;
