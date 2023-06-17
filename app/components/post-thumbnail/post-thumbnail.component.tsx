// @flow
import * as React from 'react';
import { Action } from '../action/action.component';
import { Project } from '@prisma/client';
import moment from 'moment';
import { Link } from '@remix-run/react';

type Props = {
  blog: Project;
};
export const PostThumbnail = ({ blog }: Props) => {
  return (
    <article className='blog-thumbnail-large'>
      <Link to={`/projects/${blog.slug}`}>
        <img className='blog-thumbnail__preview-image' src={blog.coverImage} alt='' />
      </Link>
      <div className='blog-thumbnail__text'>
        <h5 className='heading'>{blog.title}</h5>
        <span className='blog-thumbnail__category caption--large--bold'>
          {moment(blog.createdAt).format('MMMM Do YYYY')}
        </span>
        <p className='blog-thumbnail__description paragraph--medium'>{blog.excerpt}</p>
      </div>
      <div className='blog-thumbnail__action'>
        <Action to={`/project/${blog.slug}`} as='link' styleType='link'>
          Learn More <img width={'auto'} height={12} src='../assets/arrow-right-short.svg' alt='linkedin icon' />
        </Action>
      </div>
    </article>
  );
};
