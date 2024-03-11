// @flow
// import ModeButton from '../../shared/mode-button/ModeButton';
import { useState } from 'react';
import * as React from 'react';

import { Form, Link, NavLink, useLoaderData } from '@remix-run/react';
import useWindowDimensions from '~/hooks/WindowDimesions';
import { Action } from '../action/action.component';
import useScrollWindow from '~/hooks/ScrollWindow';

export const NavBar: React.FC = () => {
  const { width } = useWindowDimensions();
  const scrolledClass = useScrollWindow('shadow');
  const [openHamburger, setOpenHamburger] = useState(false);
  let data = useLoaderData();
  const handleActiveButton = () => {
    setOpenHamburger(!openHamburger);
  };
  return (
    <nav className={`navbar ${scrolledClass}`}>
      <div className='main-nav'>
        <Link to='/'>
          <img
            src={`/assets/logo-${width ? (width <= 900 ? 'small-' : '') : 'small-'}dark.svg`}
            height={72}
            id='nav-logo'
            alt='boucek.dev logo'
          />
        </Link>
        <div id='nav-icon3' onClick={handleActiveButton} className={openHamburger ? 'open' : ''}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={openHamburger ? 'is-active' : ''}>
          <li>
            <NavLink
              onClick={() => setOpenHamburger(false)}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              to='/project'
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpenHamburger(false)}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              to='/blog'
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpenHamburger(false)}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              to='/about'
            >
              Me
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpenHamburger(false)}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              to='/contact'
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpenHamburger(false)}
              to={'https://drive.google.com/file/d/1QuvxcCM59tgk19yrnhYKD6hIIywWG-s9/view?usp=sharing'}
              target={'_blank'}
            >
              Resume
            </NavLink>
          </li>
          {data ? (
            <Form method='post' action='/logout'>
              <li>
                <Action as='button' variant='link' onClick={() => setOpenHamburger(false)}>
                  Logout
                </Action>
              </li>
            </Form>
          ) : null}

          {/* {width >= 651 && (
            <li>
              <ModeButton />
            </li>
          )} */}
        </ul>
      </div>
    </nav>
  );
};
