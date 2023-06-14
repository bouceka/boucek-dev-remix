// @flow
import { LoaderFunction } from '@remix-run/node';
import * as React from 'react';
import { requireUserSession } from '~/data/auth.server';
type Props = {};
const AdminBlogs = (props: Props) => {
  return <div>AdminBlogs</div>;
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserSession(request);
  return null;
};

export default AdminBlogs;
