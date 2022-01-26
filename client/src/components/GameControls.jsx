import React from 'react';

const GameControls = ({ buy, sell, portfolio }) => {
  return (
    <div className='flex w-full p-4 bg-slate-700'>
      {portfolio.shares > 0 && (
        <div>
          <button
            onClick={() => sell(1)}
            className='rounded-lg bg-red-600 shadow-md px-4 py-2 mr-3 hover:bg-red-700'
          >
            Sell 100%
          </button>
          <button
            onClick={() => sell(0.5)}
            className='rounded-lg bg-red-600 shadow-md px-4 py-2 mr-3 hover:bg-red-700'
          >
            Sell 50%
          </button>

          <button
            onClick={() => sell(0.25)}
            className='rounded-lg bg-red-600 shadow-md px-4 py-2 mr-3 hover:bg-red-700'
          >
            Sell 25%
          </button>
        </div>
      )}
      {portfolio.shares <= 0 && (
        <div>
          <button disabled className='rounded-lg bg-slate-500 shadow-md px-4 py-2 mr-3'>
            Sell 100%
          </button>
          <button disabled className='rounded-lg bg-slate-500 shadow-md px-4 py-2 mr-3'>
            Sell 50%
          </button>
          <button disabled className='rounded-lg bg-slate-500 shadow-md px-4 py-2 mr-3'>
            Sell 25%
          </button>
        </div>
      )}
      {portfolio.cash > 0 && (
        <div>
          <button
            onClick={() => buy(1)}
            className='rounded-lg bg-green-600 shadow-md px-4 py-2 mr-3  hover:bg-green-700'
          >
            Buy 100%
          </button>
          <button
            onClick={() => buy(0.5)}
            className='rounded-lg bg-green-600 shadow-md px-4 py-2 mr-3  hover:bg-green-700'
          >
            Buy 50%
          </button>
          <button
            onClick={() => buy(0.25)}
            className='rounded-lg bg-green-600 shadow-md px-4 py-2 mr-3  hover:bg-green-700'
          >
            Buy 25%
          </button>
        </div>
      )}
      {portfolio.cash <= 0 && (
        <div>
          <button disabled className='rounded-lg bg-slate-500 shadow-md px-4 py-2 mr-3'>
            Buy 100%
          </button>
          <button disabled className='rounded-lg bg-slate-500 shadow-md px-4 py-2 mr-3'>
            Buy 50%
          </button>
          <button disabled className='rounded-lg bg-slate-500 shadow-md px-4 py-2 mr-3'>
            Buy 25%
          </button>
        </div>
      )}
    </div>
  );
};

export default GameControls;
