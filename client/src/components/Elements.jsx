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
