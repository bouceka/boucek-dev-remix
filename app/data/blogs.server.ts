import { Blog } from "@prisma/client";
import { prisma } from "./db.server";

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

  export async function addBlog(project: Omit<Blog, 'id'>) {
	console.log(project);
	try {
	  return await prisma.blog.create({
		data: {
		 ...project,
		 createdAt: new Date()
		},
	  });
	} catch (error) {
	  console.log(error);
	  throw new Error('Failed to add project.');
	}
  }
