// @flow
import { Link } from '@remix-run/react';
import * as React from 'react';
type Props = {
  cover: string;
  slug: string;
  title: string;
};
export const ProjectCard = ({ cover, slug, title }: Props) => {
  return (
    <div className='project-card'>
      <Link to={`/projects/${slug}`}>
        <div className='project-card__horizontal'>
          <img className='project-card__image' src={cover} alt={title} />
        </div>
      </Link>
    </div>
  );
};
