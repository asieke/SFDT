import React, { useState, useEffect } from 'react';
import { numberWithCommas } from '../lib/functions';

const GameOver = ({ data, portfolio }) => {
  const getTotal = () => {
    return Math.round(portfolio.cash + portfolio.shares * data.prices[data.prices.length - 1].avg);
  };
  const getBenchmark = () => {
    return Math.round((10000 / data.prices[0].avg) * data.prices[data.prices.length - 1].avg);
  };
  return (
    <div className='flex-col p-4 rounded-lg m-12 bg-slate-800'>
      <div>
        <img style={{ height: '60px' }} src={data.url} />
      </div>
      <h1 className='text-xl my-4'>Your Trading Report</h1>
      <p className='mb-3'>Your trading during the game was with data for the following period</p>
      <p className='mb-3'>
        {data.start.substr(0, 10)} - {data.end.substr(0, 10)}
      </p>
      <p className='mb-3'>
        You started with $10,000 and finished with ${numberWithCommas(getTotal())}
      </p>
      <p className='mb-3'>
        With all that day trading, you paid ${Math.round(portfolio.fees, 2)} in fees
      </p>
      {getTotal() > 10000 && (
        <p className='text-green-500 mb-3'>
          You were up: {Math.round(1000 * (getTotal() / 10000 - 1)) / 10}%
        </p>
      )}
      {getTotal() <= 10000 && (
        <p className='text-red-500 mb-3'>
          You were down: {Math.round(1000 * (getTotal() / 10000 - 1)) / 10}%
        </p>
      )}

      <p className='mb-3'>
        If you had just bought and held instead of trading.. your $10,000 would be worth
      </p>
      <p className='mb-3'>
        {getBenchmark()} ({Math.round(1000 * (getBenchmark() / 10000 - 1)) / 10}%)
      </p>

      {getBenchmark() > getTotal() && (
        <h1 className='text-xl my-4 text-red-500'>
          You did not beat the market, go buy some index funds
        </h1>
      )}
      {getBenchmark() <= getTotal() && (
        <h1 className='text-xl my-4 text-green-500'>You beat the market!? Can you do it again??</h1>
      )}
    </div>
  );
};

export default GameOver;
