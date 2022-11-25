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

const config: ConfigType = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET || '',
  appId: process.env.NEXT_PUBLIC_APP_ID || '',
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID || '',
};

function MyApp({ Component, pageProps }: AppProps) {
  const app = initializeApp(config);
  const AuthService = new AuthServiceImpl(app);
  const { push } = useRouter();
  useEffect(() => {
    const token = localStorage.getItem(AccessToken);
    if (token) {
      push('/');
    } else {
      push('/login');
    }
  }, []);
  return (
    <>
      <AuthProvider authService={AuthService}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
export default MyApp;
