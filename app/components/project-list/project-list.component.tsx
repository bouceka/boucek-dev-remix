// @flow
import * as React from 'react';
import { ProjectCard } from '../project-card/project-card.component';
import { Post } from '~/util/project-util';

interface Props {
  projects: Post[];
}

export const ProjectList: React.FC<Props> = ({ projects }: Props) => {
  return (
    <section className='project-section' id='section-projects'>
      <div className='row'>
        <div className='container'>
          {projects.length ? (
            <div className='project-group'>
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
