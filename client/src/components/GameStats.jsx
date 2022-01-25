import React from 'react';

const GameStats = ({ portfolio, quote }) => {
  console.log(portfolio, quote);

  const getTotal = () => {
    return portfolio.cash + portfolio.shares * quote.avg;
  };

  return (
    <div className='flex-col w-full p-4 bg-slate-700 items-start'>
      <div className='flex-col w-full p-2 mb-3 bg-slate-600 rounded-lg shadow'>
        <p className='text-xs'>Total: </p>
        <p className='text-base'>${getTotal()}</p>
      </div>
      <div className='flex-col w-full p-2 mb-3 bg-slate-600 rounded-lg shadow'>
        <p className='text-xs'>Cash: </p>
        <p className='text-base'>${portfolio.cash}</p>
      </div>
      <div className='flex-col w-full p-2 mb-3 bg-slate-600 rounded-lg shadow'>
        <p className='text-xs'>Stock: </p>
        <p className='text-base'>${portfolio.shares * quote.avg}</p>
      </div>
      <div className='flex-col w-full p-2 mb-3 bg-slate-600 rounded-lg shadow'>
        <p className='text-xs'>Trading Fees: </p>
        <p className='text-base'>${portfolio.fees}</p>
      </div>
    </div>
  );
};

export default GameStats;
