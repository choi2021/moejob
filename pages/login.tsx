import React from 'react';
import { getSession, getProviders } from 'next-auth/react';
import { InferGetServerSidePropsType, NextPageContext } from 'next';
import SEO from '../components/SEO';
import AuthLayout from '../components/auth/AuthLayout';

const Login = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <SEO title="로그인" />
      <AuthLayout providers={providers} />;
    </>
  );
};

export default Login;

export const getServerSideProps = async (context: NextPageContext) => {
  const { req, res } = context;
  const session = await getSession({ req });
  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: '/',
    });
    res.end();
    return {
      props: {},
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      providers: await getProviders(),
    },
  };
};
