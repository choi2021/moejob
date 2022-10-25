import React from 'react';
import DescriptionCard from './components/DescriptionCard';

export default function MainJob({
  name,
  platform,
  mainWork,
  qualification,
  preferential,
  url,
  img,
}) {
  return (
    <section className=' basis-3/4 flex flex-col p-2 rounded border-4  border-indigo-200 border-t-0 border-l-0 '>
      <div className='flex items-center h-2/5'>
        <div className='w-1/2 h-full'>
          <img className='max-h-full rounded-lg' src={img} alt='jobImg' />
        </div>

        <div className='flex w-1/2 flex-col items-center'>
          <h1 className='font-bold m-1 text-xl text-indigo-500'>{name}</h1>
          <img
            className='w-1/4 my-2'
            src={`/img/${platform}_logo.png`}
            alt='platform'
          />
          <a className='font-semibold mb-1 text-indigo-500' href={url}>
            {url}
          </a>
        </div>
      </div>
      <div className='flex mt-6'>
        <DescriptionCard title='주요업무' list={mainWork}></DescriptionCard>
        <DescriptionCard
          title='자격조건'
          list={qualification}
        ></DescriptionCard>
        <DescriptionCard title='우대사항' list={preferential}></DescriptionCard>
      </div>
    </section>
  );
}
