import { prisma } from './db.server';

import type { Project } from '@prisma/client';

export const getAllProjects = async (count?: number): Promise<Project[]> => {
  try {
    return await prisma.project.findMany({ orderBy: { createdAt: 'desc' }, take: count });
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
        createdAt: new Date(),
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to add project.');
  }
}

export const deleteProject = async (id: string) => {
  try {
    await prisma.project.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error('Failed to delete project.');
  }
};

export const updateProject = async (project: Project) => {
  const { id, ...updatedProject } = project;
  try {
    await prisma.project.update({
      where: { id },
      data: {
        ...updatedProject,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to update project.');
  }
};
