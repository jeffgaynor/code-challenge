import Image from 'next/image';
import { RecipeMeta } from '../../lib/types';
import { Card, Category, Clock, Content, Time, Title } from './RecipeCard.styles';

export type RecipeCardProps = {
  meta: RecipeMeta;
};

export const RecipeCard = ({ meta }: RecipeCardProps) => {
  const { category, title, time, image } = meta;
  const src = require(`../../_recipes/images/${image}`);

  return (
    <Card>
      <Image src={src} alt={`${category}: ${title}`} width="1040" height="464" objectFit="cover" />
      <Content>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Time>
          <Clock />
          {time} minutes
        </Time>
      </Content>
    </Card>
  );
};
