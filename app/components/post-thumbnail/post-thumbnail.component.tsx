// @flow
import * as React from 'react';
import { Action } from '../action/action.component';
import type { Blog, Project } from '@prisma/client';
import moment from 'moment';
import { Link } from '@remix-run/react';

type Props = {
  blog: Project | Blog;
};
export const PostThumbnail = ({ blog }: Props) => {
  return (
    <article className='blog-thumbnail-large'>
      <Link to={(blog as Project).githubURL ? `/project/${blog.slug}` : `/blog/${blog.slug}`}>
        <img className='blog-thumbnail__preview-image' src={blog.coverImage} alt='' />
      </Link>

      <div className='blog-thumbnail__text'>
        <h5 className='heading'>{blog.title}</h5>
        <div className='blog-thumbnail__category'>
          {blog.categories.map((category, index) => (
            <span className='blog-thumbnail__category-item p--medium--bold' key={index}>
              {category}
            </span>
          ))}
        </div>
        <span className='blog-thumbnail__category caption--large--bold'>
          {moment(blog.createdAt).format('MMMM Do YYYY')}
        </span>
        <p className='blog-thumbnail__description paragraph--medium'>{blog.excerpt}</p>
      </div>
      <div className='blog-thumbnail__action'>
        <Action
          to={(blog as Project).githubURL ? `/project/${blog.slug}` : `/blog/${blog.slug}`}
          as='link'
          styleType='link'
        >
          Learn More
        </Action>
      </div>
    </article>
  );
};
