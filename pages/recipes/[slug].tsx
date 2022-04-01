import fs from 'fs';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { Page, RecipePageHead } from '../../components';
import { RecipeMeta } from '../../lib/types';
import { listFiles, removeExtension } from '../../lib/utils/file';

const Content = styled.article`
  display: flex;
  max-width: 1040px;
  flex-direction: column;
  margin-top: -25px;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: 'Times', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  margin: 24px 0 10px;
`;

const Paragaph = styled.p`
  color: '#000';
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
`;

const List = styled.ul`
  margin: 0 0 0 8px;
  padding: 0;
  list-style: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  & .bullet {
    display: inline-block;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin-right: 16px;
  }
`;

const ListItem = ({ children }: { children: ReactNode }) => {
  return (
    <li>
      <span className="bullet" /> {children}
    </li>
  );
};

const Step = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 -10px;
`;

const Subtitle = styled.h5`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.primary};
`;

type Slug = { slug: string };
type Params = { params: Slug };
type RecipePageProps = {
  source: MDXRemoteSerializeResult;
};

const RecipePage = ({ source }: RecipePageProps) => {
  const components = {
    h2: Heading,
    p: Paragaph,
    ul: List,
    li: ListItem,
    h4: Step,
    h5: Subtitle,
  };

  return (
    <Page>
      <Content>
        <RecipePageHead meta={source.frontmatter as unknown as RecipeMeta} />
        <MDXRemote {...source} components={components as any} />
      </Content>
    </Page>
  );
};

export const getStaticProps = async ({ params: { slug } }: Params) => {
  const markdown = fs.readFileSync(`_recipes/${slug}.md`);
  const source = await serialize(markdown.toString(), { parseFrontmatter: true });

  return {
    props: {
      source,
    },
  };
};

export const getStaticPaths = () => ({
  paths: listFiles('_recipes').map((file) => ({
    params: {
      slug: removeExtension(file),
    },
  })),
  fallback: false,
});

export default RecipePage;
