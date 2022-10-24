import React from 'react';
import TextList from './Text';

export default function DescriptionCard({ title, list }) {
  return (
    <ul
      className={`w-1/3 ${
        title === '우대사항' ? '' : 'border-r-2'
      } border-indigo-100 px-5 h-full`}
    >
      <h6 className='font-semibold mb-3 text-center text-indigo-500'>
        {title}
      </h6>
      {list.map((work) => (
        <TextList key={work} text={work}></TextList>
      ))}
    </ul>
  );
}
