import { now } from 'lodash';
import { prisma } from './db.server';

import type { Project } from '@prisma/client';

export const getAllProjects = async (): Promise<Project[]> => {
  try {
    return await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const getProject = async (slug: string): Promise<Project | null> => {
  try {
    return await prisma.project.findFirst({ where: { slug } });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export async function addProject(project: Omit<Project, 'id'>) {
  console.log(project);
  try {
    return await prisma.project.create({
      data: {
       ...project,
       isFeatured: false,
       createdAt: new Date()
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to add project.');
  }
}
