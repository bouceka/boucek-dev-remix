// @flow
import * as React from 'react';
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__text-box'>
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
        <div className='header__technologies row'>
          <div className='header__technologies__image'>
            <img loading='lazy' src='/assets/graphql.svg' alt='' width={'100%'} height={'100%'} />
          </div>
          <div className='header__technologies__image'>
            <img loading='lazy' src='/assets/react.svg' alt='' width={'100%'} height={'100%'} />
          </div>
          <div className='header__technologies__image'>
            <img loading='lazy' src='/assets/typescript.svg' alt='' width={'100%'} height={'100%'} />
          </div>
          <div className='header__technologies__image'>
            <img loading='lazy' src='/assets/mongodb.svg' alt='' width={'100%'} height={'100%'} />
          </div>
          <div className='header__technologies__image'>
            <img loading='lazy' src='/assets/figma.svg' alt='' width={'100%'} height={'100%'} />
          </div>
          <div className='header__technologies__image'>
            <img loading='lazy' src='/assets/nextjs.svg' alt='' width={'100%'} height={'100%'} />
          </div>
          <div className='header__technologies__image'>
            <img loading='lazy' src='/assets/nestjs.svg' alt='' width={'100%'} height={'100%'} />
          </div>
          <div className='header__technologies__image'>
            <img loading='lazy' src='/assets/docker.svg' alt='' width={'100%'} height={'100%'} />
          </div>
          <div className='header__technologies__image'>
            <img loading='lazy' src='/assets/dotnet.svg' alt='' width={'100%'} height={'100%'} />
          </div>
        </div>
      {/* <div className='header--arrow'>
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
      </div> */}
    </header>
  );
};

export default Header;
