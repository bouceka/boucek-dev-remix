// @flow
import * as React from 'react';
import useScrollToElement from '~/hooks/ElementScrolledTo';
type Props = {};
export const HeaderLogos = (props: Props) => {
  const { elementRef, isElementVisible } = useScrollToElement();

  return (
    <div className={`header__technologies row ${isElementVisible ? 'animate-section-left' : ''}`} ref={elementRef}>
      <div className='header__technologies__image'>
        <img loading='lazy' src='/assets/graphql.svg' alt='GraphQL logo' width={'100%'} height={'100%'} />
      </div>
      <div className='header__technologies__image'>
        <img loading='lazy' src='/assets/react.svg' alt='React logo' width={'100%'} height={'100%'} />
      </div>
      <div className='header__technologies__image'>
        <img loading='lazy' src='/assets/typescript.svg' alt='Typescript logo' width={'100%'} height={'100%'} />
      </div>
      <div className='header__technologies__image'>
        <img loading='lazy' src='/assets/mongodb.svg' alt='MongoDB logo' width={'100%'} height={'100%'} />
      </div>
      <div className='header__technologies__image'>
        <img loading='lazy' src='/assets/figma.svg' alt='Figma logo' width={'100%'} height={'100%'} />
      </div>
      <div className='header__technologies__image'>
        <img loading='lazy' src='/assets/nextjs.svg' alt='Nextjs logo' width={'100%'} height={'100%'} />
      </div>
      <div className='header__technologies__image'>
        <img loading='lazy' src='/assets/nestjs.svg' alt='Nestjs logo' width={'100%'} height={'100%'} />
      </div>
      <div className='header__technologies__image'>
        <img loading='lazy' src='/assets/docker.svg' alt='Docker logo' width={'100%'} height={'100%'} />
      </div>
      <div className='header__technologies__image'>
        <img loading='lazy' src='/assets/dotnet.svg' alt='.Net logo' width={'100%'} height={'100%'} />
      </div>
    </div>
  );
};
