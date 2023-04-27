// @flow
import type { Projects } from '@prisma/client';
import * as React from 'react';

type Props = {
  data: Projects[];
};
export const AdminTable = ({ data }: Props) => {
  return (
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
                <button className='admin-table__btn-edit'>Edit</button>
                <button className='admin-table__btn-delete'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
