import styled from 'styled-components';
import { RecipesIcon, UtensilIcon } from '../../lib/icons';

const Root = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const Recipes = styled(RecipesIcon)`
  margin-left: 8px;
`;

export const Logo = () => {
  return (
    <Root>
      <UtensilIcon alt="Utensils" />
      <Recipes alt="Recipes" />
    </Root>
  );
};
