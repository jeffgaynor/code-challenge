import { MarkdownMeta } from './markdown';

export type RecipeMeta = MarkdownMeta & {
  category: string;
  title: string;
  image: string;
  time: number;
  posted: string;
};
