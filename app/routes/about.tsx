// @flow
import { Button } from '~/components/button/button.component';
import { Link } from '@remix-run/react';
import type { V2_MetaFunction } from '@remix-run/node';

const About = () => {
  return (
    <section className='about'>
      <div className='row'>
        <div className='container'>
          <div className='about--content-box'>
            <div className='about--description'>
              <div>
                <h3 className='heading heading__tertiary'>Hi, I&apos;m Adam Boucek!</h3>
                <p>
                  My name is Adam Boucek, and I am a Full-Stack developer with extensive knowledge of TypeScript, Sass,
                  NestJS, React, and Kotlin.
                </p>
                <p>
                  I am 25 years old, and I love doing sports, and I hate losing. I bring my winning mentality into my
                  projects. I also have experience designing websites in Figma, which helps me create any project from
                  scratch. I continually work on my skills and education. I’m passionate about Front-end, Back-end,
                  DevOps, and UX/UI design.
                </p>
              </div>
            </div>
            <div className='about--profile'>
              <div>
                <img
                  className='about__photo'
                  src='https://res.cloudinary.com/ahoy-house/image/upload/v1681952436/github/adam-boucek_rqohh1.jpg'
                  alt='Adam Boucek portrait'
                />
              </div>
              <div className='about__resume'>
                <div className='about__social-media'>
                  <Link to='https://www.linkedin.com/in/adam-boucek-42704b200/'>
                    <img width={30} height={30} src='../assets/linkedin.svg' alt='linkedin icon' />
                  </Link>
                  <Link to='https://github.com/bouceka'>
                    <img width={30} height={30} src='../assets/github.svg' alt='github icon' />
                  </Link>
                </div>
                <Button link={'/assets/resume.pdf'} target={'_blank'} label={'Resume'} className='btn-grey' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Boucek Dev | Contact Page',
    },
    {
      name: 'description',
      content:
        'Adam is a Full Stack Developer who is passionate in aiding others around the world through delightful apps.',
    },
  ];
};

export default About;
