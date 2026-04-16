import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export type PostFrontmatter = {
  title: string;
  description: string;
  keyword: string;
  date: string;
  service: string;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
  readTime: number;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function getMarkdownFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
}

function estimateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}

export function getAllPostSlugs(): string[] {
  return getMarkdownFiles().map((f) => f.replace(/\.mdx?$/, ''));
}

export function getAllPosts(): PostMeta[] {
  const files = getMarkdownFiles();
  if (files.length === 0) return [];

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, '');
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8');
      const { data, content } = matter(raw);
      const fm = data as PostFrontmatter;

      return {
        slug,
        readTime: estimateReadTime(content),
        ...fm,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const files = getMarkdownFiles();
  const match = files.find((f) => f.replace(/\.mdx?$/, '') === slug);
  if (!match) return null;

  const raw = fs.readFileSync(path.join(BLOG_DIR, match), 'utf-8');
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;

  const processed = await remark().use(html).process(content);

  return {
    slug,
    readTime: estimateReadTime(content),
    contentHtml: processed.toString(),
    ...fm,
  };
}
