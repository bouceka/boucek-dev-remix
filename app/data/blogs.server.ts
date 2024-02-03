import type { Blog, Prisma } from '@prisma/client';
import { prisma } from './db.server';
import type { DefaultArgs } from '@prisma/client/runtime';

export const getAllBlogPosts = async (options?: Prisma.BlogFindManyArgs<DefaultArgs>): Promise<Blog[]> => {
  try {
    return await prisma.blog.findMany(options);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
     const data = await prisma.blog.findMany({
      distinct: ['categories'],
      select: {
        categories: true,
      },
    });
    return [...new Set(data.flatMap(item => item.categories))].sort();
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    await prisma.$disconnect();
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
export const getCountBlogPost = async (options?: Prisma.BlogCountArgs<DefaultArgs>): Promise<number> => {
  
  try {
    return await prisma.blog.count(options);
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
