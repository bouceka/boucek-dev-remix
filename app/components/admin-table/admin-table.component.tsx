// @flow
import type { Blog, Project } from '@prisma/client';
import * as React from 'react';
import { Link } from '@remix-run/react';

type Props = {
  data: Project[] | Blog[];
};
export const AdminTable = ({ data, ...props }: Props) => {
  return (
    <>
      <div className='admin-table'>
        <table>
          <thead>
            <tr>
              <th>Cover Image</th>
              <th>Title</th>
              <th>Slug</th>
              <th>Created At</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <img className='admin-table__image-preview' src={item.coverImage} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>{item.slug}</td>
                <td>{item.createdAt.toDateString()}</td>
                <td className='admin-table__actions'>
                  <Link to={`/admin${(item as Project).githubURL ? `/project/${item.slug}` : `/blog/${item.slug}`}`} className='admin-table__btn-edit'>
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
