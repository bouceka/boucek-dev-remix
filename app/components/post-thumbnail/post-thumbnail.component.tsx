// @flow
import * as React from 'react';
import { Action } from '../action/action.component';
import type { Blog, Project } from '@prisma/client';
import moment from 'moment';
import { Link } from '@remix-run/react';

type Props = {
  post: Project | Blog;
};
export const PostThumbnail = ({ post }: Props) => {
  return (
    <article className='post-thumbnail-large'>
      <Link  to={(post as Project).githubURL ? `/project/${post.slug}` : `/blog/${post.slug}`}>
        <img className='post-thumbnail__preview-image' src={post.coverImage} alt='' />

        <div className='post-thumbnail__text'>
          <h5 className='heading'>{post.title}</h5>
          <div className='post-thumbnail__category'>
            {post.categories.map((category: string, index: number) => (
              <span className='post-thumbnail__category-item p--medium--bold' key={index}>
                {category}
              </span>
            ))}
          </div>
          <span className='post-thumbnail__date caption--large--bold'>
            {moment(post.createdAt).format('MMMM Do YYYY')}
          </span>
          <p className='post-thumbnail__description paragraph--medium'>{post.excerpt}</p>
        </div>
        <div className='post-thumbnail__action'>
          <Action
            as='button'
            variant='link'
          >
            Learn More
          </Action>
        </div>
      </Link>
    </article>
  );
};
