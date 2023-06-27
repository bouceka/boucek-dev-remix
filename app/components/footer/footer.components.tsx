// @flow
import { Link } from '@remix-run/react';
import * as React from 'react';
import { Action } from '../action/action.component';
type Props = {};
export const Footer = (props: Props) => {
  return (
    <footer>
      <div className='footer__group'>
        <Action as='link' styleType='nav-link' to={'/project'}>
          Projects
        </Action>
        <Action as='link' styleType='nav-link' to={'/blog'}>
          Blog
        </Action>
        <Action as='link' styleType='nav-link' to={'/about'}>
          About
        </Action>
        <Action as='link' styleType='nav-link' to={'/contact'}>
          Contact
        </Action>
        <Action
          as='link'
          target={'_blank'}
          styleType='nav-link'
          to={'/assets/Adam_Boucek_-_Full_Stack_Developer_resume.pdf'}
        >
          Resume
        </Action>
      </div>
      <div className='footer__group'>
        <Link to='https://www.linkedin.com/in/adam-boucek-42704b200/'>
          <img width={30} height={30} src='/assets/linkedin.svg' alt='linkedin icon' />
        </Link>
        <Link to='https://github.com/bouceka'>
          <img width={30} height={30} src='/assets/github.svg' alt='github icon' />
        </Link>
      </div>
      <div className='footer__group'>
        <span>Adam Bouček 2023, All rights reserved.</span>
      </div>
    </footer>
  );
};
