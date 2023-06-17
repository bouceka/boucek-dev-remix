// @flow
import * as React from 'react';
import type { Project } from '@prisma/client';
import { PostThumbnail } from '../post-thumbnail/post-thumbnail.component';

interface Props {
  projects: Project[];
}

export const ProjectList: React.FC<Props> = ({ projects }: Props) => {
  return (
    <>
      {projects.length ? (
        <div className='project-group'>
          {projects.map((project, index) => (
            <PostThumbnail key={index} blog={project} />
          ))}
        </div>
      ) : null}
    </>
  );
};
