// @flow
import * as React from 'react';
import useScrollToElement from '~/hooks/ElementScrolledTo';
export const NewChapter = () => {
  const { elementRef, isElementVisible } = useScrollToElement();

  return (
    <section className='new-chapter'>
      <div className='row'>
        <div className='content'>
          <div className='image-group white' ref={elementRef}>
            <img
              className={isElementVisible ? 'animate-section-right' : ''}
              src='https://res.cloudinary.com/boucekdev/image/upload/v1706944295/github/my-journey/Adam_Boucek_a3yzmi.jpg'
              alt='Adam Boucek programming'
            />
            <img
              className={isElementVisible ? 'animate-section-right' : ''}
              src='https://res.cloudinary.com/boucekdev/image/upload/v1706944189/github/my-journey/PHOTO-2023-06-20-14-35-55_oy5ocf.jpg'
              alt='Adam Boucek graduation'
            />
          </div>
          <div className='content__description white p--xlarge'>
            <p>
              The most essential takeaway our grandmother left us is to live our lives fully and go out of our comfort
              zone no matter how happy we might be. Once we have our last moments before leaving this world, we don't
              want to have that burning feeling we haven't tried something. This entire experience pushed my mom and me
              to move abroad. In early 2020, I finally decided to learn English because until then, I couldn't even
              introduce myself. I was so committed that I learned English at the academic level within a year.
            </p>
            <p>
              I moved to Canada and studied for an Advanced Digital Design and Development Diploma. It went so well
              that. I graduated a year earlier than expected. All this could happen only because of all the strong women
              around me and my inspiring grandmother, who gave me crucial advice about my life in her very last moment.
              Now I'm in my 3rd year of university, studying computer science. I'm passionate about making web/mobile
              apps, but I see myself working in cybersecurity and for a national organization to fight cyber crimes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
