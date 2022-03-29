import Link from 'next/link';
import styled from 'styled-components';

const Root = styled.footer(({ theme }) => ({
  color: theme.colors.primary,
  border: `1px solid ${theme.colors.secondary}`,
  height: 80,
  display: 'flex',
  padding: '20px 80px',
  '@media only screen and (max-width: 680px)': {
    padding: 24,
  },
}));

const Container = styled.div`
  height: 32px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Root>
      <Container>
        <div>Yummy Recipes! Copyright {year}</div>
        <div>
          <Link href="/">yummyrecipes.com</Link>
        </div>
      </Container>
    </Root>
  );
};
