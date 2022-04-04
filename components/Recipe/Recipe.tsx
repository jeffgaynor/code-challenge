import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { RecipeMeta } from '../../lib/types';
import { Content, Heading, List, ListItem, Paragaph, Step, Subtitle } from './Recipe.styles';
import { RecipeHead } from './RecipeHead';

type RecipeProps = {
  meta: RecipeMeta;
  source: MDXRemoteSerializeResult;
};

export const Recipe = ({ meta, source }: RecipeProps) => {
  const { description } = meta;
  const components = {
    h2: Heading,
    p: Paragaph,
    ul: List,
    li: ListItem,
    h4: Step,
    h5: Subtitle,
  };

  return (
    <Content>
      <RecipeHead meta={meta} />
      {description && (
        <>
          <Heading>Description</Heading>
          <Paragaph>{description}</Paragaph>
        </>
      )}
      <MDXRemote {...source} components={components} />
    </Content>
  );
};
