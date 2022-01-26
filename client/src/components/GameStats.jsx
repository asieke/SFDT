import React from 'react';
import { numToDollar } from '../lib/functions';

const GameStats = ({ portfolio, quote }) => {
  const getTotal = () => {
    return portfolio.cash + portfolio.shares * quote.avg;
  };

  return (
    <div className='flex-col w-full p-4 bg-slate-700 items-start'>
      <div className='flex-col w-full p-2 mb-4 bg-slate-600 rounded-lg shadow-sm shadow-slate-800'>
        <p className='text-3xl text-center'>{numToDollar(quote.avg)}</p>
      </div>
      <h1 className='text-center mb-4'>My Portfolio</h1>
      <div className='flex-col w-full p-2 mb-4 bg-slate-600 rounded-lg shadow-sm shadow-slate-800'>
        <p className='text-xs text-center'>Total </p>
        <p className='text-base text-center'>${numToDollar(getTotal())}</p>
      </div>
      <div className='flex-col w-full p-2 mb-4 bg-slate-600 rounded-lg shadow-sm shadow-slate-800'>
        <p className='text-xs text-center'>Cash </p>
        <p className='text-base text-center'>${numToDollar(portfolio.cash)}</p>
      </div>
      <div className='flex-col w-full p-2 mb-4 bg-slate-600 rounded-lg shadow-sm shadow-slate-800'>
        <p className='text-xs text-center'>Stock </p>
        <p className='text-base text-center'>${numToDollar(portfolio.shares * quote.avg)}</p>
      </div>
      <div className='flex-col w-full p-2 mb-4 bg-slate-600 rounded-lg shadow-sm shadow-slate-800'>
        <p className='text-xs text-center '>Trading Fees </p>
        <p className='text-base text-center'>${numToDollar(portfolio.fees)}</p>
      </div>
      <div className='flex-col w-full p-2 mb-4 bg-slate-600 rounded-lg shadow-sm shadow-slate-800'>
        <p className='text-xs text-center '>Total Trades </p>
        <p className='text-base text-center'>{portfolio.trades.length}</p>
      </div>
    </div>
  );
};

export default GameStats;
