import styled from 'styled-components';

export const ListItem = styled.li`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin: 0 20px;
  color: ${({ theme }) => theme.colors.text.primary};
  display: block;

  :last-of-type {
    margin: 0 0 0 20px;
  }

  a {
    display: block;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media only screen and (max-width: 1200px) {
    margin: 0 8px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 18px;
    a {
      color: white;
    }
    a:hover {
      color: ${({ theme }) => theme.colors.text.primary};
    }

    :first-of-type {
      margin-top: 12px;
    }
    :last-of-type {
      margin: 0 8px 12px 0;
    }
  }
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex: 1;
  overflow: hidden;
  background-color: #fff;

  @media (max-width: 768px) {
    position: absolute;
    top: 56px;
    left: 0;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100vw;
    max-height: 0;
    background: ${({ theme }) => theme.colors.primary};
    transition: max-height 0.3s ease-out;
    text-align: right;
  }
`;

export const NavTrigger = styled.label`
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
  margin-right: -20px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavIcon = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  display: block;
  height: 4px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 24px;
  border-radius: 3px;

  :before,
  :after {
    background: ${({ theme }) => theme.colors.primary};
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
    border-radius: 3px;
  }

  :before {
    top: 8px;
  }

  :after {
    top: -8px;
  }
`;

export const NavButton = styled.input`
  display: none;

  @media (max-width: 768px) {
    :checked ~ ${List} {
      max-height: 300px;
      transition: max-height 0.3s ease-out;
    }
  }

  :checked ~ ${NavTrigger} ${NavIcon} {
    background: transparent;
  }

  :checked ~ ${NavTrigger} ${NavIcon}:before {
    transform: rotate(-45deg);
  }

  :checked ~ ${NavTrigger} ${NavIcon}:after {
    transform: rotate(45deg);
  }

  :checked ~ ${NavTrigger} ${NavIcon}:before, :checked ~ ${NavTrigger} ${NavIcon}:after {
    top: 0;
  }
`;
