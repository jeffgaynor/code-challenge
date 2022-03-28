import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  font-variant: small-caps;
  text-transform: uppercase;
  padding-bottom: 8px;
  border-bottom: 1px solid #e5e5e5;
  margin: 0;
`;

const Root = styled.nav`
  min-width: 216px;
  padding: 40px 24px;

  @media only screen and (max-width: 680px) {
    padding: 24px 24px 0 24px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 15px 0;
  }

  li {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.text.primary};
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
