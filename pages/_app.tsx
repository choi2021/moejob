import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyles';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AuthServiceImpl } from '../service/AuthService';
import { AuthProvider } from '../context/AuthContext';
import { DBProvider } from './../context/DBContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { DBServiceImpl } from '../service/DBService';
import AuthStateChanged from '../components/AuthStateChanged';
import { firebaseApp } from '../src/firerbase.config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3000,
      cacheTime: 360000,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const authService = new AuthServiceImpl(firebaseApp);
  const dbService = new DBServiceImpl(firebaseApp);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DBProvider dbService={dbService}>
          <SessionProvider>
            <AuthProvider authService={authService}>
              <AuthStateChanged>
                <ThemeProvider theme={theme}>
                  <GlobalStyle />
                  <Component {...pageProps} />
                </ThemeProvider>
              </AuthStateChanged>
            </AuthProvider>
          </SessionProvider>
        </DBProvider>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
