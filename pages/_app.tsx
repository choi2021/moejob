import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { AuthServiceImpl } from '../service/AuthService';
import { ConfigType } from '../types/Authtypes';
import { initializeApp } from 'firebase/app';
import { AuthProvider } from '../context/AuthContext';
import { useEffect } from 'react';
import { AccessToken } from '../variables/authVariable';
import { useRouter } from 'next/router';
import { DBProvider } from './../context/DBContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { JobProvider } from '../context/JobContext';
import { DBServiceImpl } from '../service/DbService';

const config: ConfigType = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET || '',
  appId: process.env.NEXT_PUBLIC_APP_ID || '',
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID || '',
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3000,
      cacheTime: 360000,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const app = initializeApp(config);
  const authService = new AuthServiceImpl(app);
  const dbService = new DBServiceImpl(app);
  const { push } = useRouter();
  useEffect(() => {
    const token = localStorage.getItem(AccessToken);
    if (!token) {
      push('/login');
    }
  }, []);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DBProvider dbService={dbService}>
          <AuthProvider authService={authService}>
            <JobProvider>
              <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
              </ThemeProvider>
            </JobProvider>
          </AuthProvider>
        </DBProvider>
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
