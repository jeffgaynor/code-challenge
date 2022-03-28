import Link from 'next/link';
import styled from 'styled-components';

const Root = styled.nav`
  @media only screen and (max-width: 740px) {
    // TODO: Add hamburger menu for responsive
    display: none;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex: 1;
  }

  li {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin: 0 20px;
    color: ${({ theme }) => theme.colors.text.primary};
    display: block;
    @media only screen and (max-width: 940px) {
      // TODO: Add hamburger menu for responsive
      margin: 0 8px;
      font-size: 14px;
    }
  }
`;

export const Nav = () => {
  return (
    <Root>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/quick-recipes">Quick Recipes</Link>
        </li>
        <li>
          <Link href="/on-the-go">On the Go</Link>
        </li>
        <li>
          <Link href="/kids-meals">Kids Meals</Link>
        </li>
        <li>
          <Link href="/health">Health</Link>
        </li>
      </ul>
    </Root>
  );
};
