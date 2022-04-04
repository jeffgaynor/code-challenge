import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-style: ${({ theme }) => theme.fonts.primary.style};
  font-weight: 700;
  font-size: 16px;
  font-variant: small-caps;
  text-transform: uppercase;
  padding-bottom: 8px;
  border-bottom: 1px solid #e5e5e5;
  margin: 0;
  align-self: flex-end;
`;

const Root = styled.nav`
  min-width: 200px;
  @media only screen and (max-width: 768px) {
    padding: 0;
    margin-top: 40px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 15px 0;
  }

  li {
    font-family: ${({ theme }) => theme.fonts.primary.family};
    font-style: ${({ theme }) => theme.fonts.primary.style};
    font-weight: ${({ theme }) => theme.fonts.primary.weight};
    font-size: 16px;
    line-height: 32px;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.text.primary};
  }
  li:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SideNav = () => {
  return (
    <Root>
      <Title>Categories</Title>
      <ul>
        <li>
          <Link href="/categories/dinner">Dinner</Link>
        </li>
        <li>
          <Link href="/categories/desserts">Desserts</Link>
        </li>
        <li>
          <Link href="/categories/appetizers">Appetizers</Link>
        </li>
        <li>
          <Link href="/categories/breakfast">Breakfast</Link>
        </li>
      </ul>
    </Root>
  );
};
