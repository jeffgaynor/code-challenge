import fs from 'fs';
import { GetServerSideProps } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useRouter } from 'next/router';
import { HeadMeta, Page } from '../../components/Layout';
import { Recipe } from '../../components/Recipe';
import { RecipeMeta } from '../../lib/types';

type Params = {
  page: string;
};

type RecipePageProps = {
  source: MDXRemoteSerializeResult;
};

const RecipePage = ({ source }: RecipePageProps) => {
  const router = useRouter();
  const meta = source.frontmatter as unknown as RecipeMeta;
  const { category, title } = meta;
  const seoTitle = `${title && `${title} - `} ${category && `${category} - `} Yummy Recipes!`;

  return (
    <Page>
      <HeadMeta meta={{ ...meta, title: seoTitle, url: router.asPath }} />
      <Recipe meta={meta} source={source} />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { page } = params as Params;

  try {
    const markdown = fs.readFileSync(`_recipes/markdown/${page}.md`);
    const source = await serialize(markdown.toString(), { parseFrontmatter: true });

    return {
      props: {
        source,
      },
    };
  } catch (error) {
    console.error(error);
    // Make sure the markdown exists, otherwise return 404 page
    return {
      notFound: true,
    };
  }
};

export default RecipePage;
