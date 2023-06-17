// @flow
import * as React from 'react';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__text-box'>
        <h1 className='heading'>Adam Boucek</h1>
        <div className='header__bio'>
          <span className='header__subtitle'>noun</span>
          <span className='p--xlarge'>Full start developer, Graduated from NIC</span>
          <span className='header__subtitle'>verb</span>
          <span className='p--xlarge'>Learn and embrace</span>
          <span className='header__subtitle'>adjective</span>
          <span className='p--xlarge'>Detail oriented, open-minded</span>
        </div>
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
