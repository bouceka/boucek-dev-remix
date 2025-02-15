// @flow
import { Link } from '@remix-run/react';
import * as React from 'react';
import { Action } from '../action/action.component';
type Props = {};
export const Footer = (props: Props) => {
  return (
    <footer>
      <div className='footer__group'>
        <Action as='link' variant='nav-link' to={'/project'}>
          Projects
        </Action>
        <Action as='link' variant='nav-link' to={'/blog'}>
          Blog
        </Action>
        <Action as='link' variant='nav-link' to={'/about'}>
          Me
        </Action>
        <Action as='link' variant='nav-link' to={'/contact'}>
          Contact
        </Action>
        <Action
          as='link'
          target={'_blank'}
          variant='nav-link'
          to={'/assets/Adam_Boucek_-_Full_Stack_Developer_resume.pdf'}
        >
          Resume
        </Action>
      </div>
      <div className='footer__group'>
        <Link to='https://www.linkedin.com/in/adam-boucek/'>
          <img width={30} height={30} src='/assets/linkedin.svg' alt='linkedin icon' />
        </Link>
        <Link to='https://github.com/bouceka'>
          <img width={30} height={30} src='/assets/github.svg' alt='github icon' />
        </Link>
        <Link to='https://medium.com/@boucekdev'>
          <img width={30} height={30} src='/assets/medium.svg' alt='medium icon' />
        </Link>
      </div>
      <div className='footer__group'>
        <span>Adam Boucek 2025, All rights reserved.</span>
      </div>
    </footer>
  );
};
