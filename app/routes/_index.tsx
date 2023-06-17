import { Link, type V2_MetaFunction } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';
import Header from '~/components/header/header.component';
import { Modal } from '~/components/modal/modal.component';
import { ProjectList } from '~/components/project-list/project-list.component';
import { getAllProjects } from '~/data/projects.server';

export default function Index() {
  const { projects } = useTypedLoaderData<typeof loader>();
  const [openModal, setOpenModal] = useState(false);
  // useEffect(() => {
  //   const getWarning = localStorage.getItem('WIPModal');
  //   if (!getWarning) {
  //     setOpenModal(true);
  //     localStorage.setItem('WIPModal', JSON.stringify('displayed'));
  //   }
  // }, []);
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
      <section className='project-section' id='section-projects'>
        <div className='row'>
          <div className='container'>
            <h3 className='heading'>
              Projects
              <Link to={'/projects'} className='project-link'>
                (SEE ALL)
              </Link>
            </h3>
            <ProjectList projects={projects} />
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
        'Adam is a Full Stack Developer who is passionate in aiding others around the world through delightful apps.',
    },
  ];
};

export const loader = async () => {
  const projects = await getAllProjects();
  return typedjson({ projects });
};
