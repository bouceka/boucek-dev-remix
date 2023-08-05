// @flow
import * as React from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__text-box'>
        <h1 className='heading'>Adam Bouček</h1>
        <span className='header__subtitle__main'>/ædəm baʊː tʃɛk/</span>
        <div className='header__bio'>
          <span className='header__subtitle'>noun</span>
          <span className='p--xxlarge'>Full-stack developer, graduated from NIC</span>
          <span className='header__subtitle'>verb</span>
          <span className='p--xxlarge'>Learn and implement</span>
          <span className='header__subtitle'>adjective</span>
          <span className='p--xxlarge'>Detail oriented, open-minded</span>
        </div>
      </div>
      <div className='header--arrow'>
        <Link
          href={'#!'}
          to={'blog'}
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          activeClass='active'
          className={'cta'}
        >
          <span className='btn btn--link'>See my work</span>
          <div className='arrow-navigate__button'>
            <span className='arrow-navigate'></span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
