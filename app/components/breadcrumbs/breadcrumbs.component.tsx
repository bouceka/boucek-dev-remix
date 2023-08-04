// @flow
import { useLocation } from '@remix-run/react';
import * as React from 'react';
import { Action } from '../action/action.component';

const capitalize = (crumb: string) =>
  crumb.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1) + ' ');

const styleCrumb = (crumb: string) => {
  return capitalize(crumb.replace(/-/g, ' '));
};
export const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = '';

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className='crumb' key={crumb}>
          <Action as='link' variant='link' to={currentLink}>
            {styleCrumb(crumb)}
          </Action>
        </div>
      );
    });

  crumbs.unshift(
    <div className='crumb' key='home'>
      <Action as='link' variant='link' to={'/'}>
        Home
      </Action>
    </div>
  );
  return (
    <div>
      <div className='breadcrumbs'>{crumbs}</div>
    </div>
  );
};

export default Breadcrumbs;
