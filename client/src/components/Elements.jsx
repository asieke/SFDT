import React from 'react';

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

export const Countdown = () => (
  // https://res.cloudinary.com/dkit4ixkx/image/upload/v1643137690/videoplayback_uwltd5.gif

  <div className='fixed flex z-10 inset-0 w-screen h-screen justify-center items-center'>
    <div className='flex w-1/2 h-1/2 shadow-lg rounded-lg bg-black justify-center items-center'>
      <img
        style={{ opacity: 0.5 }}
        src='https://res.cloudinary.com/dkit4ixkx/image/upload/v1643137690/videoplayback_uwltd5.gif'
        width='100%'
      ></img>
    </div>
  </div>
);

export const CompletionBar = ({ completionPct }) => (
  <div className='flex w-full p-1 bg-slate-600'>
    <div className='h-[10px] bg-slate-800' style={{ width: completionPct + '%' }} />
  </div>
);
