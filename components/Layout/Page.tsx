import Head from 'next/head';
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
  @media only screen and (max-width: 680px) {
    flex-direction: column-reverse;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  gap: 40px;
  padding: 48px 40px 48px 80px;
  @media only screen and (max-width: 680px) {
    padding: 24px;
  }
`;

export type PageProps = {
  children: ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return (
    <Layout>
      <Head>
        <title>The Best Recipes - Yummy Recipes!</title>
        <meta name="description" content="These are yummy recipes." />
        <meta name="keywords" content="food,appetizers,desserts,drinks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body>
        <Content>{children}</Content>
        <SideNav />
      </Body>
      <Footer />
    </Layout>
  );
};
