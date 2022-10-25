import React from 'react';

export default function TextButton({ text }) {
  return (
    <button
      name={text}
      className='text-xs rounded-md mr-2 px-2 py-1 border-2 border-indigo-300'
    >
      {text}
    </button>
  );
}
