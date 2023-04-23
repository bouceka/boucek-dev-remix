// @flow
import { Link } from '@remix-run/react';
import * as React from 'react';
import { Post } from '~/util/project-util';

type Props = {
  project: Post;
};
export const ProjectCard = ({ project }: Props) => {
  return (
    <div className='project-card'>
      <Link to={`/projects/${project.slug}`}>
        <div className='project-card__horizontal'>
          <img className='project-card__image' src={project.coverImage} alt={project.title} />
        </div>
      </Link>
    </div>
  );
};
