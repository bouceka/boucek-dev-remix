import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

interface MarkdownData {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
  github: string;
  website: string;
  cover: string;
}

const postsDirectory =
  process.env.NODE_ENV === 'production' ? __dirname + '/posts' : path.join(process.cwd(), 'public/posts');

export function getPostData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...(data as MarkdownData),
    content,
  };

  return postData;
}

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
