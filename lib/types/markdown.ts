export type MarkdownMeta<T = unknown> =
  | (T & {
      slug: string;
    })
  | undefined;
