import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyles';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { DBProvider } from './../context/DBContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { DBServiceImpl } from '../service/DBService';
import { firebaseApp } from '../src/firerbase.config';
import { DefaultSeo } from 'next-seo';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3000,
      cacheTime: 360000,
    },
  },
});

const defaultSEO = {
  defaultTitle: '모으잡',
  titleTemplate: '%s | 모으잡',
  description: '원하는 회사의 채용공고를 모으고 비교해보자',
  canonical: 'https://moejob.vercel.app/',
  keywords: ['moejob', 'choi2021'],
  icon: '/favicon.ico',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://moejob.vercel.app',
    title: '모으잡',
    site_name: '모으잡',
    images: [
      {
        url: '/banner.jpg',
        width: 285,
        height: 167,
        alt: '이미지',
      },
    ],
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const dbService = new DBServiceImpl(firebaseApp);
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <QueryClientProvider client={queryClient}>
        <DBProvider dbService={dbService}>
          <SessionProvider basePath={process.env.NEXTAUTH_URL}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Component {...pageProps} />
            </ThemeProvider>
          </SessionProvider>
        </DBProvider>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
