// @flow
import * as React from 'react';
import { ProjectCard } from '../project-card/project-card.component';
import { Project } from '@prisma/client';

interface Props {
  projects: Project[];
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
