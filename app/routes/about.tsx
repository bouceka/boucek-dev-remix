// @flow
import { Button } from '~/components/button/button.component';
import { Link } from '@remix-run/react';

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
                  My name is Adam Boucek, and I am an aspiring Full-Stack developer with extensive knowledge of
                  TypeScript, Sass, NestJS, React, and Kotlin.
                  <br />
                  I am 25 years old, and I love doing sports, and I hate losing. I bring my winning mentality into my
                  projects. I also have experience designing websites in Figma, which helps me create any project from
                  scratch. I continually work on my skills and education. I’m passionate about Front-end, Back-end,
                  DevOps, and UX/UI design.
                  <br />
                </p>
              </div>
            </div>
            <div className='about--profile'>
              <div>
                <img className='about__photo' src='/assets/portrait.png' alt='' />
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
                <Button link={'/assets/resume.pdf'} target={'_blank'} label={'Resume'} style='btn-grey' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;