import Head from 'next/head';
import { Meta } from '../../lib/types';

type MetaProps = {
  meta: Meta;
};

export const HeadMeta = ({ meta }: MetaProps) => {
  const {
    title = 'The Best Recipes - Yummy Recipes!',
    description = 'These are yummy recipes.',
    keywords = 'food, appetizers, desserts, drinks',
    type = 'article',
    image,
    url,
  } = meta;

  return (
    <Head>
      <title key="title">{title}</title>
      {url && <link key="canonical" rel="canonical" href={url} />}
      <meta key="description" name="description" content={description} />
      <meta key="keywords" name="keywords" content={keywords} />

      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:type" property="og:type" content={type} />
      {url && <meta key="og:url" property="og:url" content={url} />}
      {image && <meta key="og:image" property="og:image" content={image} />}
    </Head>
  );
};
