// @flow
import * as React from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';
import { AdminTable } from '~/components/admin-table/admin-table.component';
import { Button } from '~/components/button/button.component';
import { getAllProjects } from '~/data/projects.server';

const AdminProjects = () => {
  const { projects } = useTypedLoaderData<typeof loader>();
  return (
    <>
      <div className='admin-heading'>
        <h3>Admin Projects</h3>
        <Button link='/admin/add-project' className={'btn-primary'} label='Add Project' />
      </div>
      <section>
        <AdminTable data={projects} />
      </section>
    </>
  );
};

export const loader = async () => {
  const projects = await getAllProjects();
  return typedjson({ projects });
};

export default AdminProjects;
