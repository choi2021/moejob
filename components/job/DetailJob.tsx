import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import DescriptionList from './DescriptionList';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useDBService } from '../../context/DBContext';
import { ModifiedJobsType } from '../../types/Jobtype';
import { Kinds } from '../../variables/jobVariable';

const Wrapper = styled.section`
  max-width: 1000px;
  width: 100%;
  margin-bottom: 2rem;
`;

const JobImg = styled(Image)`
  flex: 50%;
  height: auto;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  flex: 50%;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const MetaBox = styled.div`
  flex: 60%;
  padding: 1rem;
  h1 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: bold;
    color: black;
  }
`;

const PlatformBox = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;

  h3 {
    font-size: 0.9rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }
  img {
    width: 50px;
    height: 35px;
    margin-right: 1rem;
  }

  div {
    padding: 0.25rem 0.5rem;
    background-color: lightblue;
    margin-right: 0.5rem;
    font-size: 0.8rem;
    border-radius: 1rem;
  }
`;

const PlatformAndTagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionBox = styled.div`
  display: flex;
  margin-top: 1rem;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export default function DetailJob() {
  const { query } = useRouter();
  const dbService = useDBService();
  const { id } = query;
  const jobId = typeof id === 'string' ? id : id?.join() || '';
  const { data } = useQuery(
    ['jobs'],
    () => {
      return dbService.getJobs();
    },
    {
      select: (data: ModifiedJobsType) => {
        return data[jobId];
      },
    }
  );
  return (
    <Wrapper>
      {data && (
        <>
          <TitleBox>
            <JobImg
              src={data?.img}
              alt="detail_image"
              height={350}
              width={400}
              priority
            />
            <MetaBox>
              <h1>{data?.name}</h1>
              <PlatformAndTagBox>
                <PlatformBox>
                  <h3>플랫폼:</h3>
                  <Image
                    src="/wanted_logo.png"
                    alt="logo"
                    height={100}
                    width={100}
                    priority
                  />
                  <h3>태그:</h3>
                  {data.checkPercentage >= 0.5 && <div>50%이상</div>}
                </PlatformBox>
              </PlatformAndTagBox>

              <DescriptionList
                kind={Kinds.MainWork}
                list={data?.mainWork || []}
              />
            </MetaBox>
          </TitleBox>

          <DescriptionBox>
            <DescriptionList
              kind={Kinds.qualification}
              list={data?.qualification || []}
            />
            <DescriptionList
              kind={Kinds.preferential}
              list={data?.preferential || []}
            />
          </DescriptionBox>
        </>
      )}
    </Wrapper>
  );
}
