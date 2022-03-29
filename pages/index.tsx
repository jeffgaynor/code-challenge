import Link from 'next/link';
import { Page } from '../components/Layout';
import { RecipeCard } from '../components/Recipes';
import { RecipeMeta } from '../lib/types';
import { sortByDate } from '../lib/utils/array';
import { listMarkdownMeta } from '../lib/utils/markdown';

type RecipesPageProps = {
  items: RecipeMeta[];
};

const RecipesPage = ({ items }: RecipesPageProps) => {
  const recipes = sortByDate({ items, key: 'posted' });

  return (
    <Page>
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

export const getStaticProps = async () => ({
  props: {
    items: listMarkdownMeta('./pages/recipes'),
  },
});

export default RecipesPage;
