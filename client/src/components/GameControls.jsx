import React from 'react';

const GameControls = ({ buy, sell }) => {
  return (
    <div className='flex w-full p-4 bg-slate-700'>
      <button onClick={sell} className='rounded-lg bg-red-600 shadow-md px-6 py-2 hover:bg-red-700'>
        Sell
      </button>
      <button
        onClick={buy}
        className='rounded-lg bg-green-600 shadow-md px-6 py-2 ml-4  hover:bg-green-700'
      >
        Buy
      </button>
    </div>
  );
};

export default GameControls;
