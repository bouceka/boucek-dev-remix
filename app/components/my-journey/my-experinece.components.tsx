// @flow
import { Link } from '@remix-run/react';
import * as React from 'react';
import useScrollToElement from '~/hooks/ElementScrolledTo';
type Props = {};
export const MyExperienceMyJourney = (props: Props) => {
  const { elementRef, isElementVisible } = useScrollToElement();
  return (
    <section className='my-experience'>
      <div className='row'>
        <div className='content'>
          <div className='content__description p--xlarge'>
            <p>
              After years of moving out from Czechia when I lived in the UK and Canada, I can tell I don't regret a
              single moment I have moved to learn about the world and myself. I am incredibly proud that I could commit
              myself to push my comfort zone a little bit further. I have met so many incredible people who inspired me
              a lot. I can't wait to start using all my experience, whether back in Europe or elsewhere in the world.
            </p>
            <p>
              Throughout my studies I have learned how to apply design thinking and design an app from scratch using
              Figma. I can design a design system with all UI/UX principles. I can a develop an app accordingly based on
              user's needs. I learned how to develop either mobile or web app with NextJs, RemixJs, and React Native. I
              also worked on a group project were I led peer developers to deploy a professional web app. Lastly, I
              learned how to operate with microprocessors and make fascinating circuits using ESP32.
            </p>
          </div>
          <div className={isElementVisible ? 'animate-section-up project-action' : 'project-action'} ref={elementRef}>
            <Link to={'/project/nic-athletics'} className='project-action__link'>
              <div className='project-action__image-group'>
                <img
                  className='laptop'
                  src='https://res.cloudinary.com/boucekdev/image/upload/v1707003345/github/my-journey/Laptop_ox6roq.png'
                  alt='NIC Athletics project laptop'
                />
                <img
                  src='https://res.cloudinary.com/boucekdev/image/upload/v1707003343/github/my-journey/iPad_Air_2020_opvdwt.png'
                  alt='NIC Athletics project mobile'
                  className='mobile'
                />
              </div>
              <div className='project-action__action'>
                <button className='btn btn--link'>NIC Athletics Project</button>
              </div>
            </Link>
            <Link
              to={'/blog/build-microservices-project-with-dotnet-core-and-rabbitMQ'}
              className='project-action__link'
            >
              <div className='project-action__image-group'>
                <img
                  className='default'
                  src='https://img.youtube.com/vi/xNuSWvRPki4/0.jpg'
                  alt='Adam Boucek physical computing'
                />
              </div>
              <div className='project-action__action'>
                <button className='btn btn--link'>Physical Computing</button>
              </div>
            </Link>

            <Link
              to={'/blog/build-microservices-project-with-dotnet-core-and-rabbitMQ'}
              className='project-action__link'
            >
              <div className='project-action__image-group'>
                <img
                  className='default'
                  src='https://res.cloudinary.com/boucekdev/image/upload/v1690505287/github/rgqmp6xy3aovzjydkddo.jpg'
                  alt='Rescue Us! mobile app'
                />
              </div>
              <div className='project-action__action'>
                <button className='btn btn--link'>Rescue Us!</button>
              </div>
            </Link>
            <Link to={'/project/ahoy-house'} className='project-action__link'>
              <div className='project-action__image-group'>
                <img
                  className='laptop'
                  src='https://res.cloudinary.com/boucekdev/image/upload/v1707004165/github/my-journey/Laptop_jfpgsa.png'
                  alt='Ahoy House project laptop'
                />
                <img
                  src='https://res.cloudinary.com/boucekdev/image/upload/v1707004074/github/my-journey/Color_Silver_1_aovuvs.png'
                  alt='Ahoy House project mobile'
                  className='mobile'
                />
              </div>
              <div className='project-action__action'>
                <button className='btn btn--link'>Ahoy House</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
