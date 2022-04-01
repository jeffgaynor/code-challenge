import Image from 'next/image';
import styled from 'styled-components';
import { ClockIcon } from '../../lib/icons';
import { RecipeMeta } from '../../lib/types';

const Card = styled.div`
  background: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.24);
  width: 520px;
  position: relative;
  @media only screen and (min-width: 768px) and (max-width: 1160px) {
    width: 360px;
  }
  @media only screen and (min-width: 1160px) and (max-width: 1480px) {
    width: 420px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.article`
  padding: 24px;
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
  font-size: 40px;
  margin: 0 0 7px;
  @media only screen and (min-width: 768px) and (max-width: 1200px) {
    font-size: 28px;
  }
  @media only screen and (min-width: 1200px) and (max-width: 1480px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 32px;
  }
`;

const Time = styled.h4`
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-style: ${({ theme }) => theme.fonts.primary.style};
  font-weight: 300;
  font-size: 15px;
  font-variant: small-caps;
  text-transform: uppercase;
  margin: 0;
  display: flex;
  align-items: center;
`;

const Clock = styled(ClockIcon)`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 8px;
`;

export type RecipeCardProps = {
  meta: RecipeMeta;
};

export const RecipeCard = ({ meta }: RecipeCardProps) => {
  const { category, title, time, image } = meta;

  return (
    <Card>
      <Image src={`/images/${image}`} alt={`${category}: ${title}`} width="1040" height="464" objectFit="cover" />
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
