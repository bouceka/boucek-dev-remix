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

export interface Post extends MarkdownData {
  slug: string;
  content: string;
}

const postsDirectory =
  process.env.NODE_ENV === 'production' ? path.join(__dirname, '..', 'posts') : path.join(process.cwd(), '/posts');

export function getPostData(slug: string): Post {
  const postSlug = slug.replace(/\.md$/, '');
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

export async function getPosts(): Promise<any> {
  const dir = await fs.promises.readdir(postsDirectory);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.promises.readFile(path.join(postsDirectory, filename));
      const { data, content } = matter(file.toString());
      return {
        slug: filename.replace(/\.md$/, ''),
        ...(data as MarkdownData),
        content,
      };
    })
  );
}

export async function getPost(slug: string) {
	console.log(slug)
	console.log(postsDirectory)
  const filepath = path.join(postsDirectory, slug + '.md');
	console.log(filepath)
  // const file = await fs.promises.readFile(filepath);

  // const { data, content } = matter(file.toString());
  // return {
  //   slug: slug,
  //   ...(data as MarkdownData),
  //   content,
  // };
}

// export function getFeaturedPosts() {
//   const allPosts = getAllPosts();

//   const featuredPosts = allPosts.filter((post) => post.isFeatured);

//   return featuredPosts;
// }
