// @flow
// import ModeButton from '../../shared/mode-button/ModeButton';
import { useState } from 'react';
import * as React from 'react';

import { Link, NavLink } from '@remix-run/react';
import useWindowDimensions from '~/hooks/WindowDimesions';

export const NavBar: React.FC = () => {
  const { width } = useWindowDimensions();
  const [openHamburger, setOpenHamburger] = useState(false);
  const handleActiveButton = () => {
    setOpenHamburger(!openHamburger);
  };
  return (
    <nav className='navbar'>
      <div className='main-nav'>
        <Link to='/'>
          <img
            src={`/assets/logo-${width ? (width <= 900 ? 'small-' : '') : 'small-'}light.svg`}
            height={90}
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
            <NavLink onClick={() =>setOpenHamburger(false)} className={({ isActive }) => (isActive ? 'is-active' : '')} to='/projects'>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() =>setOpenHamburger(false)} className={({ isActive }) => (isActive ? 'is-active' : '')} to='/blogs'>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() =>setOpenHamburger(false)} className={({ isActive }) => (isActive ? 'is-active' : '')} to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() =>setOpenHamburger(false)} className={({ isActive }) => (isActive ? 'is-active' : '')} to='/contact'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() =>setOpenHamburger(false)} to={'/assets/Adam_Boucek_-_Full_Stack_Developer_resume.pdf'} target={'_blank'}>
              Resume
            </NavLink>
          </li>
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
