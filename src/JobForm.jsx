import React from 'react';

export default function JobForm() {
  return (
    <form className='flex basis-3/6'>
      <input
        className='basis-3/4 text-center rounded  border-solid border-2 px-2 py-1 border-sky-500 focus:border-sky-700 focus:border-2 focus:border-solid'
        placeholder='원하는 채용공고의 url을 알려주세요😁'
      ></input>
      <button className='basis-1/6 font-semibold rounded  border-solid border-2 border-sky-500 ml-2'>
        Send
      </button>
    </form>
  );
}
