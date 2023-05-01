// @flow
import { Outlet } from '@remix-run/react';
import * as React from 'react';
import { Sidebar } from '~/components/sidebar/sidebar.component';
type Props = {};
const Admin = (props: Props) => {
  return (
    <div className='page'>
      <div className='row admin'>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="text-red-500">
      Oh no, something went wrong!
      <pre>{error.message}</pre>
    </div>
  );
}

export default Admin;
