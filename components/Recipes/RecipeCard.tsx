import Image from 'next/image';
import styled from 'styled-components';
import { ClockIcon } from '../../lib/icons';
import { RecipeMeta } from '../../lib/types';

export type RecipePreviewProps = {
  meta: RecipeMeta;
};

const Card = styled.div`
  background: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.24);
  width: 520px;

  @media only screen and (max-width: 680px) {
    width: 100%;
  }
`;

const Content = styled.article`
  padding: 24px;
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
  font-size: 40px;
  margin: 0 0 7px;
`;

const Time = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
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

export const RecipeCard = ({ meta }: RecipePreviewProps) => {
  const { category, title, time, image } = meta;

  return (
    <Card>
      <Image src={`/images/${image}`} alt={`${category}: ${title}`} width="520" height="232" objectFit="cover" />
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
