// @flow
import * as React from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';
import { AdminTable } from '~/components/admin-table/admin-table.component';
import { Button } from '~/components/button/button.component';
import { getAllProjects } from '~/data/projects.server';

const AdminProjects = () => {
  const { posts } = useTypedLoaderData<typeof loader>();
  return (
    <>
      <div className='admin-heading'>
        <h3>Admin Projects</h3>
        <Button link='/admin/add-project' className={'btn-primary'} label='Add Project' />
      </div>
      <section>
        <AdminTable data={posts} />
      </section>
    </>
  );
};

export const loader = async () => {
  const posts = await getAllProjects();
  return typedjson({ posts });
};

export default AdminProjects;
