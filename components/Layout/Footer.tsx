import Link from 'next/link';
import styled from 'styled-components';

const Root = styled.footer(({ theme }) => ({
  color: theme.colors.primary,
  border: `1px solid ${theme.colors.secondary}`,
  height: 80,
  display: 'flex',
  padding: '20px 80px',
  '@media only screen and (max-width: 768px)': {
    padding: 24,
    height: 48,
  },
}));

const Container = styled.div`
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-style: ${({ theme }) => theme.fonts.primary.style};
  font-weight: ${({ theme }) => theme.fonts.primary.weight};
  font-size: 14px;
  height: 32px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-self: center;
  align-items: center;
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
