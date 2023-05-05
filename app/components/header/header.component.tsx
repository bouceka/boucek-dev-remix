// @flow
import * as React from 'react';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__text-box'>
        <h1 className='heading heading__primary'>Adam Boucek</h1>
        <span className='p--xlarge'>Full Stack developer</span>
      </div>
      <div className='header--arrow'>
        <a href='#section-projects' className='cta'>
          <span className='btn btn--link'>See my projects</span>
          <div className='arrow__button'>
            <span className='arrow'></span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
