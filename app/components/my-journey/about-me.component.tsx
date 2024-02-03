// @flow
import * as React from 'react';
import useScrollToElement from '~/hooks/ElementScrolledTo';

export const AboutMeMyJourney = () => {
  const { elementRef, isElementVisible } = useScrollToElement();
  return (
    <section className='my-journey__about-me'>
      <div className='row'>
        <div className='content'>
          <div className='content__description p--xlarge'>
            <span className='p--xlarge--bold'>Hi! I am Adam Boucek.</span>
            <p>
              I came from Czechia, formerly the Czech Republic. I grew up in Prague, the City of a Hundred Spires, with
              stunning architecture and the oldest European bridge. Even though Czechia was a communist-ruled Soviet
              country, we preserved our historical culture, vastly influenced by Austrian and German culture, even
              though we are considered Slavic.
            </p>
            <p>
              Growing up in this environment made me love architecture and music. Besides that, I was an athlete in high
              school. Hence, my adolescence included doing a lot of sports activities such as soccer, snowboarding,
              camping, tennis, and especially handball, which I played for nine years. I still keep that spark for any
              sports activities. Moreover, I was in the science class, so I graduated from physics with excellent math
              knowledge.
            </p>
          </div>
          <div className='image-group' ref={elementRef}>
            <img
              className={isElementVisible ? 'animate-section-left' : ''}
              src='https://res.cloudinary.com/boucekdev/image/upload/v1706918103/github/my-journey/adam-boucek-my-journey_q86cqq.jpg'
              alt='Adam Boucek'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
