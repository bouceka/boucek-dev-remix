import { LoaderFunction } from '@remix-run/node';
import { Link, type V2_MetaFunction } from '@remix-run/react';
import { useState } from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';
import Header from '~/components/header/header.component';
import { Modal } from '~/components/modal/modal.component';
import { ProjectList } from '~/components/project-list/project-list.component';
import { allowUserToUseFromCountry } from '~/data/auth.server';
import { getAllBlogPosts } from '~/data/blogs.server';
import { getAllProjects } from '~/data/projects.server';

export default function Index() {
  const { projects, blogs } = useTypedLoaderData<typeof loader>();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Header />
      <Modal
        primaryBtnContent='Close'
        primaryAction={() => {
          setOpenModal(false);
        }}
        open={openModal}
        onClose={() => setOpenModal(false)}
        title='The portfolio is in WORK IN PROGRESS'
        desc='This is a portfolio website of Adam Boucek. This app is using RemixJS and is still under construction.'
      />
      <section className='project-section' id='projects'>
        <div className='row'>
          <div className='container'>
            <h2 className='heading'>
              Projects
              <Link to={'/project'} className='project-link'>
                (SEE ALL)
              </Link>
            </h2>
            <ProjectList projects={projects} />
          </div>
        </div>
      </section>
      <section className='project-section'>
        <div className='row'>
          <div className='container'>
            <h2 className='heading'>
              Blog
              <Link to={'/blog'} className='project-link'>
                (SEE ALL)
              </Link>
            </h2>
            <ProjectList projects={blogs} />
          </div>
        </div>
      </section>
    </>
  );
}

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'Boucek Dev',
    },
    {
      name: 'description',
      content:
        'Adam Boucek is a Full Stack Developer who is passionate in aiding others around the world through delightful apps.',
    },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const projects = await getAllProjects(2);
  const blogs = await getAllBlogPosts(2);
  allowUserToUseFromCountry(request);

  return typedjson({ projects, blogs });
};
