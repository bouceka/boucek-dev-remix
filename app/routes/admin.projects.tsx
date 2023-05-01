// @flow
import * as React from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';
import { AdminTable } from '~/components/admin-table/admin-table.component';
import { getAllProjects } from '~/data/projects.server';
import { Action } from '~/components/action/action.component';

const AdminProjects = () => {
  const { projects } = useTypedLoaderData<typeof loader>();
  return (
    <>
      <div className='admin-heading'>
        <h3>Admin Projects</h3>
        <Action as='link' to='/admin/add-project' styleType='primary'>
          Add Project
        </Action>
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
