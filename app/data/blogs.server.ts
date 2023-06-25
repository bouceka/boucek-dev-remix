import type { Blog } from '@prisma/client';
import { prisma } from './db.server';

export const getAllBlogPosts = async (): Promise<Blog[]> => {
  try {
    return await prisma.blog.findMany({ orderBy: { createdAt: 'desc' } });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getBlogPost = async (slug: string): Promise<Blog | null> => {
  try {
    return await prisma.blog.findFirst({ where: { slug } });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addBlog = async (blog: Omit<Blog, 'id'>) => {
  const { userId, ...blogData } = blog;
  try {
    return await prisma.blog.create({
      data: {
        ...blogData,
        User: { connect: { id: userId } },
        createdAt: new Date(),
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to add project.');
  }
};

export const updateBlog = async (blog: Blog) => {
  const { id, ...blogPost } = blog;
  try {
    await prisma.blog.update({
      where: { id },
      data: {
        ...blogPost,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to update blog post.');
  }
};

export const deleteBlog = async (id: string) => {
  try {
    await prisma.blog.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Failed to delete blog post.');
  }
};
