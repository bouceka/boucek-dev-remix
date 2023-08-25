// @flow
import * as React from 'react';
import useScrollToElement from '~/hooks/ElementScrolledTo';
import { HeaderLogos } from '../header-logos/header-logos.components';

const Header: React.FC = () => {
  const { elementRef, isElementVisible } = useScrollToElement();

  return (
    <header ref={elementRef}  className='header'>
      <div  className={`header__text-box ${isElementVisible ? 'animate-section-down' : ''}`}>
        <div className='row'>
          <div className='container'>
            <h1 className='heading'>Adam Bouček</h1>
            <span className='header__subtitle__main'>/ædəm baʊː tʃɛk/</span>
            <div className='header__bio'>
              <span className='header__subtitle'>noun</span>
              <span className='p--xxlarge'>
                Full-stack developer, <span className='header__school'>CS student @ TWU</span>
              </span>
              <span className='header__subtitle'>verb</span>
              <span className='p--xxlarge'>Learn and implement</span>
              <span className='header__subtitle'>adjective</span>
              <span className='p--xxlarge'>Detail oriented, open-minded</span>
            </div>
          </div>
        </div>
      </div>
      <HeaderLogos />
    </header>
  );
};

export default Header;
