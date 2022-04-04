import Link from 'next/link';
import styled from 'styled-components';
import { Logo } from './Logo';
import { Nav } from './Nav/Nav';

const Root = styled.header(({ theme }) => ({
  color: theme.colors.primary,
  border: `1px solid ${theme.colors.secondary}`,
  background: '#fff',
  display: 'flex',
  height: 112,
  padding: '20px 80px',
  '@media only screen and (max-width: 768px)': {
    padding: 24,
    height: 72,
  },
}));

const Container = styled.div`
  z-index: 20;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  height: 48px;
`;

export const Header = () => {
  return (
    <Root>
      <Container>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <Nav />
      </Container>
    </Root>
  );
};
