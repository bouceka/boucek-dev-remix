// @flow
import * as React from 'react';
import useScrollToElement from '~/hooks/ElementScrolledTo';
type Props = {};
export const GrandmotherMyJourney = (props: Props) => {
  const { elementRef, isElementVisible } = useScrollToElement();

  return (
    <section className='my-journey__about-me' ref={elementRef}>
      <div className='row'>
        <div className='content'>
          <div className='image-group white'>
            <img
              className={isElementVisible ? 'animate-section-right' : ''}
              src='https://res.cloudinary.com/boucekdev/image/upload/v1706940191/github/my-journey/dunplings_geo6xn.jpg'
              alt='Strawberry dumplings'
            />
            <img
              className={isElementVisible ? 'animate-section-right' : ''}
              src='https://res.cloudinary.com/boucekdev/image/upload/v1706941050/github/my-journey/IMG_9189_m0c91m.jpg'
              alt='Grandmother'
            />
          </div>
          <div className='content__description white p--xlarge'>
            <p>
              In my life have been many women who influenced my life. Besides my mom who has been my strongest support
              in my life, there was my grandmother. My grandmother was a very kind and thoughtful person. She always put
              others over herself. It was also because she worked as an X-ray nurse, she loved helping others. When I
              was a kid she very often looked after me. She brought with her anytime she needed to do some errands and
              when we got back she always made me Czech strawberry dumplings. They were delicious!
            </p>
            <p>
              Around the time I was graduating high school, our family received bad news that our lovely grandmother was
              in the fatal stage of cancer. When I visited my grandmother with our family, something odd happened. Our
              always positive grandmother wasn't sad that her journey was about to end, she started repeating she
              regretted not fleeing from Czechia when she could in 1968. She told us that she had gotten a job offer
              from a hospital in Warnemünde, Germany and could have had a better life for herself and her kids.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
