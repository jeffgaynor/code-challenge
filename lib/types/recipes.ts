import { MarkdownMeta } from './markdown';

export type Meta = {
  title: string;
  image: string;
  description: string;
  keywords: string;
  published: string;
  type?: 'article' | 'website';
  url: string;
};

export type RecipeMeta = MarkdownMeta<Meta> & {
  category: string;
  time: number;
};
