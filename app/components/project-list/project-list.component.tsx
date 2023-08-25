// @flow
import * as React from 'react';
import type { Blog, Project } from '@prisma/client';
import { PostThumbnail } from '../post-thumbnail/post-thumbnail.component';
import useScrollToElement from '~/hooks/ElementScrolledTo';

interface Props {
  projects: Project[] | Blog[];
}

export const ProjectList: React.FC<Props> = ({ projects }: Props) => {
  const { elementRef, isElementVisible } = useScrollToElement();

  return (
    <>
      {projects.length ? (
        <div className={`${isElementVisible ? 'animate-section-up' : ''} project-group `} ref={elementRef}>
          {projects.map((project, index) => (
            <PostThumbnail key={index} post={project} />
          ))}
        </div>
      ) : null}
    </>
  );
};
