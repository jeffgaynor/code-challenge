import styled from 'styled-components';
import { ClockIcon } from '../../lib/icons';

export const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 1040px;
`;

export const Category = styled.h2`
  color: ${({ theme }) => theme.colors.highlight};
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  font-variant: small-caps;
  text-transform: lowercase;
  margin: 0 0 9px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.secondary.family};
  font-style: ${({ theme }) => theme.fonts.secondary.style};
  font-weight: ${({ theme }) => theme.fonts.secondary.weight};
  line-height: 1;
  font-size: 64px;
  margin: 0 0 17px;
  @media only screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Time = styled.h4`
  font-family: ${({ theme }) => theme.fonts.primary.family};
  font-style: ${({ theme }) => theme.fonts.primary.style};
  font-weight: 300;
  font-size: 15px;
  font-variant: small-caps;
  text-transform: uppercase;
  margin: 40px 0 0px;
  display: flex;
  align-items: center;
`;

export const Clock = styled(ClockIcon)`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 8px;
`;
