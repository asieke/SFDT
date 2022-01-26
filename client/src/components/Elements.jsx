import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import useInterval from '../lib/useInterval';

export const Button = ({ size, children, onClick }) => {
  let str = `font-bold py-2 px-4 rounded shadow bg-emerald-700 hover:bg-emerald-500 text-emerald-50`;
  if (size === 'large') {
    str = 'h-12 px-6 w-full ' + str;
  }
  return (
    <button className={str} onClick={onClick}>
      {children}
    </button>
  );
};

export const Countdown = ({ count }) => {
  const text = ['3', '2', '1', 'GO!'];

  return (
    <div className='fixed flex z-20 inset-0 w-screen h-screen justify-center items-center'>
      <div className='flex w-1/2 h-1/2 shadow-lg rounded-lg justify-center items-center'>
        <h1 style={{ fontSize: '200px' }} className='animate-ping font-extrabold'>
          {text[count] || ''}
        </h1>
      </div>
    </div>
  );
};

export const CompletionBar = ({ completionPct }) => (
  <div className='flex w-full p-1 bg-slate-600'>
    <div className='h-[10px] bg-slate-800' style={{ width: completionPct + '%' }} />
  </div>
);
