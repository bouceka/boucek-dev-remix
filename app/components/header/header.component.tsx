// @flow
import * as React from 'react';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__text-box'>
        <h1 className='heading'>Adam Bouček</h1>
          <span className='header__subtitle__main'>/ædəm baʊː tʃɛk/</span>
        <div className='header__bio'>
          <span className='header__subtitle'>noun</span>
          <span className='p--xxlarge'>Full stack developer, Graduated from NIC</span>
          <span className='header__subtitle'>verb</span>
          <span className='p--xxlarge'>Learn and embrace</span>
          <span className='header__subtitle'>adjective</span>
          <span className='p--xxlarge'>Detail oriented, open-minded</span>
        </div>
      </div>
      <div className='header--arrow'>
        <a href='#projects' className='cta'>
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
