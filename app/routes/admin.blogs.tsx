// @flow
import { LoaderFunction } from '@remix-run/node';
import * as React from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson/dist/remix';
import { Action } from '~/components/action/action.component';
import { AdminTable } from '~/components/admin-table/admin-table.component';
import { requireUserSession } from '~/data/auth.server';
import { getAllBlogPosts } from '~/data/blogs.server';
type Props = {};
const AdminBlogs = (props: Props) => {
  const { blogPosts } = useTypedLoaderData<typeof loader>();
  return (
    <>
      <div className='admin-heading'>
        <h3>Admin Projects</h3>
        <Action as='link' to='/admin/blog/add' styleType='primary'>
          Add Blog Post
        </Action>
      </div>
      <section>
        <AdminTable data={blogPosts} />
      </section>
    </>
  );
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserSession(request);
  const blogPosts = await getAllBlogPosts();
  return typedjson({ blogPosts });
};


export default AdminBlogs;
