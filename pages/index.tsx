import Link from 'next/link';
import { HeadMeta, Page } from '../components/Layout';
import { RecipeCard } from '../components/RecipeCard';
import { Meta, RecipeMeta } from '../lib/types';
import { sortByDate } from '../lib/utils/array';
import { listMarkdownMeta } from '../lib/utils/markdown';

type HomePageProps = {
  items: RecipeMeta[];
};

const HomePage = ({ items }: HomePageProps) => {
  const recipes = sortByDate({ items, key: 'posted' });

  return (
    <Page>
      <HeadMeta meta={{ url: '/', type: 'website' } as Meta} />
      {recipes?.map((meta) => (
        <Link key={meta.slug} href={`/recipes/${meta.slug}`}>
          <a>
            <RecipeCard meta={meta} />
          </a>
        </Link>
      ))}
    </Page>
  );
};

export const getServerSideProps = async () => ({
  props: {
    items: listMarkdownMeta('_recipes/markdown'),
  },
});

export default HomePage;
