import React from 'react';
import { getSession, getProviders } from 'next-auth/react';
import { InferGetServerSidePropsType, NextPageContext } from 'next';
import AuthLayout from '../components/auth/AuthLayout';

const Login = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <AuthLayout providers={providers} />;
    </>
  );
};

export default Login;

export const getServerSideProps = async ({ req }: NextPageContext) => {
  const session = await getSession({ req });
  if (session) {
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
