import matter from 'gray-matter';
import { MarkdownMeta } from '../types/markdown';
import { listFiles, removeExtension } from './file';

export function getMarkdownMeta<T = unknown>(dir: string, file: string): MarkdownMeta<T> {
  const slug = removeExtension(file);

  if (file.match(/\.mdx?/)) {
    const { data } = matter.read(`${dir}/${file}`);

    return { slug, ...data } as MarkdownMeta<T>;
  }

  return;
}

export function listMarkdownMeta<T = unknown>(dir: string): MarkdownMeta<T>[] {
  const files = listFiles(dir);
  const items = files?.map((file) => getMarkdownMeta<T>(dir, file)).filter((file) => file);

  return items;
}
