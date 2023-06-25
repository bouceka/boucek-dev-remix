// @flow
import type { LoaderFunction } from '@remix-run/node';
import * as React from 'react';
import { requireUserSession } from '~/data/auth.server';
type Props = {};
const Admin = (props: Props) => {
  return <p>asdas</p>;
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserSession(request);
  return null;
};

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className='text-red-500'>
      Oh no, something went wrong!
      <pre>{error?.message}</pre>
    </div>
  );
}

export default Admin;
