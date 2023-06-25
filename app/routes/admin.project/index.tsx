// @flow
import * as React from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';
import { AdminTable } from '~/components/admin-table/admin-table.component';
import { getAllProjects } from '~/data/projects.server';
import { Action } from '~/components/action/action.component';
import type { LoaderFunction } from '@remix-run/node';
import { requireUserSession } from '~/data/auth.server';

const AdminProjects = () => {
  const { projects } = useTypedLoaderData<typeof loader>();
  return (
    <>
      <div className='admin-heading'>
        <h3>Projects</h3>
        <Action as='link' to='/admin/project/add' styleType='primary'>
          Add Project
        </Action>
      </div>
      <section>
        <AdminTable data={projects} />
      </section>
    </>
  );
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserSession(request);
  const projects = await getAllProjects();
  return typedjson({ projects });
};

export default AdminProjects;
