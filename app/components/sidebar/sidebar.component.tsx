// @flow
import { Link, NavLink } from '@remix-run/react';
import * as React from 'react';
type Props = {};
export const Sidebar = (props: Props) => {
  return (
    <aside className='sidebar'>
      <h6>Main Menu</h6>
      <ul>
        <li>
          <NavLink to='/admin/projects' className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to='/admin/blogs' className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`}>
            Blogs
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
