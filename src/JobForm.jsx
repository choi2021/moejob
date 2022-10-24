import React from 'react';

export default function JobForm() {
  return (
    <form className='flex basis-3/6 justify-end'>
      <input
        className='basis-3/4 text-center rounded  border-solid border-2 px-2 py-1 border-indigo-200 '
        placeholder='원하는 채용공고의 url을 알려주세요😁'
      ></input>
      <button className='basis-1/6 font-semibold rounded  border-solid border-2 border-indigo-200 ml-2'>
        Send
      </button>
    </form>
  );
}
