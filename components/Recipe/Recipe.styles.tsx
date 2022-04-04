import { ReactNode } from 'react';
import styled from 'styled-components';

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.text.primary};
  max-width: 1040px;
  margin-top: -32px;
  @media only screen and (max-width: 768px) {
    margin-top: -20px;
  }
`;

export const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: 'Times', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  margin: 24px 0 10px;
  @media only screen and (max-width: 768px) {
    font-size: 38px;
  }
`;

export const Paragaph = styled.p`
  color: '#000';
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
`;

export const List = styled.ul`
  margin: 0 0 0 8px;
  padding: 0;
  list-style: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
`;

export const ListItemBullet = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-right: 16px;
`;

export const ListItem = ({ children }: { children?: ReactNode }) => {
  return (
    <li>
      <ListItemBullet /> {children}
    </li>
  );
};

export const Step = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 -10px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Subtitle = styled.h5`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.primary};
`;
