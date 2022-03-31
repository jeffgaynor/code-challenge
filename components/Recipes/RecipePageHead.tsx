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
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  font-variant: small-caps;
  text-transform: lowercase;
  margin: 0 0 9px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: 'Times', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  margin: 0 0 17px;
`;

const Time = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
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
        width="532"
        height="232"
        layout="responsive"
        objectFit="cover"
      />
      <Time>
        <Clock />
        {time} minutes
      </Time>
    </Root>
  );
};
