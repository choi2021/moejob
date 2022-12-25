import React from 'react';
import { getSession, getProviders } from 'next-auth/react';
import { InferGetServerSidePropsType, NextPageContext } from 'next';
import AuthLayout from '../components/auth/AuthLayout';
import { NextSeo } from 'next-seo';

const Login = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <NextSeo
        title="로그인"
        description="원하는 회사의 채용공고를 모으고 비교해보자"
        openGraph={{
          type: 'website',
          url: 'https://moejob.vercel.app/login',
          title: '로그인 | 모으잡',
          description: '원하는 회사의 채용공고를 모으고 비교해보자',
        }}
      />
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
