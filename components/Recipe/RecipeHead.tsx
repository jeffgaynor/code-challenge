import Image from 'next/image';
import { RecipeMeta } from '../../lib/types';
import { Category, Clock, Root, Time, Title } from './RecipeHead.styles';

export type RecipeHeadProps = {
  meta: RecipeMeta;
};

export const RecipeHead = ({ meta }: RecipeHeadProps) => {
  const { category, title, time, image } = meta;
  const src = require(`../../_recipes/images/${image}`);

  return (
    <Root>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Image src={src} alt={`${category}: ${title}`} width="1040" height="464" objectFit="cover" priority />
      <Time>
        <Clock />
        {time} minutes
      </Time>
    </Root>
  );
};
