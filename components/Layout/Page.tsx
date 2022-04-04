import { ReactNode } from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { Header } from './Header';
import { SideNav } from './SideNav';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Body = styled.main`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 48px 80px 48px 80px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 40px 24px 24px 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  gap: 40px;
  padding-right: 40px;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    padding-right: 0;
  }
`;

export type PageProps = {
  children: ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return (
    <Layout>
      <Header />
      <Body>
        <Content>{children}</Content>
        <SideNav />
      </Body>
      <Footer />
    </Layout>
  );
};
