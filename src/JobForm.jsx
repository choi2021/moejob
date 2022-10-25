import React, { useState } from 'react';

export default function JobForm({ onSubmit }) {
  const [url, setUrl] = useState('');
  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
    setUrl('');
  };
  return (
    <form className='flex basis-3/6 justify-end' onSubmit={handleSubmit}>
      <input
        value={url}
        onChange={handleChange}
        className='basis-3/4 text-center rounded  border-solid border-2 px-2 py-1 border-indigo-200 '
        placeholder='원하는 채용공고의 url을 알려주세요😁'
      ></input>
      <button className='basis-1/6 font-semibold rounded  border-solid border-2 border-indigo-200 ml-2'>
        Send
      </button>
    </form>
  );
}
