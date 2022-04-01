import Image from 'next/image';
import styled from 'styled-components';
import { ClockIcon } from '../../lib/icons';
import { RecipeMeta } from '../../lib/types';

const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Category = styled.h2`
  color: ${({ theme }) => theme.colors.highlight};
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  font-variant: small-caps;
  text-transform: lowercase;
  margin: 0 0 9px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.secondary.family};
  font-style: ${({ theme }) => theme.fonts.secondary.style};
  font-weight: ${({ theme }) => theme.fonts.secondary.weight};
  line-height: 1;
  font-size: 64px;
  margin: 0 0 17px;
  @media only screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

const Time = styled.h4`
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-style: ${({ theme }) => theme.fonts.primary.style};
  font-weight: 300;
  font-size: 15px;
  font-variant: small-caps;
  text-transform: uppercase;
  margin: 40px 0 0px;
  display: flex;
  align-items: center;
`;

const Clock = styled(ClockIcon)`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 8px;
`;

export type RecipePageHeadProps = {
  meta: RecipeMeta;
};

export const RecipePageHead = ({ meta }: RecipePageHeadProps) => {
  const { category, title, time, image } = meta;

  return (
    <Root>
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Image
        src={`/images/${image}`}
        alt={`${category}: ${title}`}
        width="1040"
        height="464"
        // layout="responsive"
        objectFit="cover"
      />
      <Time>
        <Clock />
        {time} minutes
      </Time>
    </Root>
  );
};
