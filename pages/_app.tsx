import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyles';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import { DefaultSeo } from 'next-seo';
import { DBProvider } from './../context/DBContext';
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from '@tanstack/react-query';
import { DBServiceImpl } from '../service/DBService';
import { firebaseApp } from '../src/firerbase.config';
import { theme } from '../styles/theme';
import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const defaultSEO = {
  defaultTitle: '모으잡',
  titleTemplate: '%s | 모으잡',
  description: '원하는 회사의 채용공고를 모으고 비교해보자',
  canonical: 'https://moejob.vercel.app/',
  keywords: ['moejob', 'choi2021', '모으잡'],
  icon: '/favicon.ico',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://moejob.vercel.app',
    title: '모으잡',
    site_name: '모으잡',
    description: '원하는 회사의 채용공고를 모으고 비교해보자',
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
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60,
          },
        },
      })
  );
  const dbService = new DBServiceImpl(firebaseApp);
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <QueryClientProvider client={queryClient}>
        <DBProvider dbService={dbService}>
          <SessionProvider basePath={process.env.NEXTAUTH_URL}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
              </Hydrate>
            </ThemeProvider>
          </SessionProvider>
        </DBProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
