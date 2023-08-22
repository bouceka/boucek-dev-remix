// @flow
import { Link } from '@remix-run/react';
import type { LoaderFunction, V2_MetaFunction } from '@remix-run/node';
import { Action } from '~/components/action/action.component';
import { allowUserToUseFromCountry } from '~/data/auth.server';

const About = () => {
  return (
    <section className='about'>
      <div className='row'>
        <div className='container'>
          <div className='about--content-box'>
            <div className='about--description'>
              <div>
                <h3 className='heading heading__tertiary'>Hi, I&apos;m Adam Bouček!</h3>
                <p>I am a Full-Stack developer who loves turning ideas into amazing digital experiences.</p>
                <p>
                  I specialize in TypeScript, Sass, NestJS, NextJS, and .Net. These tools help me build websites and
                  apps that just work. My competitive spirit from sports fuels my drive to create top-notch projects
                  that stand out. I also bring designs to life using Figma. It's all about making things look and feel
                  great. I'm always learning from the tech side to how things should look and function. If you've got
                  a vision, I'm here to make it real. Let's turn ideas into reality and create something awesome
                  together.
                </p>
              </div>
            </div>
            <div className='about--profile'>
              <div>
                <img
                  className='about__photo'
                  src='https://res.cloudinary.com/boucekdev/image/upload/v1681952436/github/adam-boucek_rqohh1.jpg'
                  alt='Adam Boucek portrait'
                />
              </div>
              <div className='about__resume'>
                <div className='about__social-media'>
                  <Link to='https://www.linkedin.com/in/adam-boucek/'>
                    <img width={30} height={30} src='../assets/linkedin.svg' alt='linkedin icon' />
                  </Link>
                  <Link to='https://github.com/bouceka'>
                    <img width={30} height={30} src='../assets/github.svg' alt='github icon' />
                  </Link>
                  <Link to='https://medium.com/@boucekdev'>
                    <img width={30} height={30} src='/assets/medium.svg' alt='medium icon' />
                  </Link>
                </div>
                <Action
                  as='link'
                  to={'/assets/Adam_Boucek_-_Full_Stack_Developer_resume.pdf'}
                  target={'_blank'}
                  variant='primary'
                >
                  Resume
                </Action>
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

export const loader: LoaderFunction = async ({ request }) => {
  allowUserToUseFromCountry(request);
  return null;
};

export default About;
