import React, { useState } from 'react';

export default function JobForm({ onSubmit, isLoading, error }) {
  const [url, setUrl] = useState('');
  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    url && onSubmit(url);
    setUrl('');
  };
  if (isLoading)
    return (
      <div className='text-xl  flex basis-3/6 justify-center underline decoration-sky-500'>
        로딩중입니다...
      </div>
    );
  return (
    <form className='flex basis-3/6 justify-end ' onSubmit={handleSubmit}>
      <input
        value={url}
        onChange={handleChange}
        className={`basis-3/4 text-center rounded  border-solid border-2 px-2 py-1 ${
          error ? 'border-rose-600' : 'border-indigo-200'
        } `}
        placeholder={error ? error : '원하는 채용공고의 url을 알려주세요😁'}
      ></input>
      <button className='basis-1/6 font-semibold rounded  border-solid border-2 border-indigo-200 ml-2'>
        Send
      </button>
    </form>
  );
}
