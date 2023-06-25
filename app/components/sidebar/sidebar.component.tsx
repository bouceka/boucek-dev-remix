// @flow
import { NavLink } from '@remix-run/react';
import * as React from 'react';
type Props = {};
export const Sidebar = (props: Props) => {
  return (
    <aside className='sidebar'>
      <NavLink to='/admin' end className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`}>
        <h6>Main Menu</h6>
      </NavLink>
      <ul>
        <li>
          <NavLink to='/admin/project' className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to='/admin/blog' className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`}>
            Blog Posts
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
