import React, { useState, useEffect } from 'react';
import { numberWithCommas } from '../lib/functions';
import ReactTooltip from 'react-tooltip';

const GameOver = ({ data, portfolio }) => {
  const getTotal = () => {
    return portfolio.cash + portfolio.shares * data.prices[data.prices.length - 1].avg;
  };
  const getBenchmark = () => {
    return (10000 / data.prices[0].avg) * data.prices[data.prices.length - 1].avg;
  };

  const print = {
    totalReturn: Math.abs(Math.round(1000 * (getTotal() / 10000 - 1)) / 10) + '%',
    totalBalance: '$' + numberWithCommas(Math.round(getTotal())),
    totalBenchmarkReturn: Math.abs(Math.round(1000 * (getBenchmark() / 10000 - 1)) / 10) + '%',
    totalBenchmark: '$' + numberWithCommas(Math.round(getBenchmark())),
    totalFees: '$' + numberWithCommas(Math.round(10 * portfolio.fees) / 10),
    startDate: new Date(data.start).toLocaleDateString('en-US'),
    endDate: new Date(data.end).toLocaleDateString('en-US'),
  };

  return (
    <div className='flex flex-row flex-wrap p-8 rounded-lg m-12 bg-slate-800'>
      <h1 className='text-4xl font-mono font-bold mb-6'>Your Trading Report</h1>
      <div className='font-sans	p-4 mb-6 text-sm flex w-full items-center justify-center rounded-md bg-slate-700 shadow-md shadow-slate-900'>
        <div className='w-[80px]'>
          <img src={data.url} className='h-[60px] rounded-full shadow-md shadow-slate-900' />
        </div>
        <div className='flex-col ml-2 grow'>
          <p className='text-lg font-semibold'>{data.name}</p>
          <p className='text-sm font-light'>{data.description}</p>
          <p className='text-sm font-light'>
            Your simulated trading game was for {data.ticker} during the period of {print.startDate}{' '}
            to {print.endDate}
          </p>
        </div>
      </div>

      <div className='w-1/2 pr-3'>
        <div className='font-sans	p-4 text-sm flex w-full items-center justify-center rounded-md bg-slate-700 shadow-md shadow-slate-900'>
          <div className='w-[80px]'>
            {getTotal() > 10000 && (
              <p className='text-2xl font-bold text-green-600'>{print.totalReturn}</p>
            )}
            {getTotal() <= 10000 && (
              <p className='text-2xl font-bold text-red-600'>{print.totalReturn}</p>
            )}
          </div>
          <div className='flex-col ml-3 grow'>
            <p className='text-lg font-semibold'>Your Total Return</p>
            <p className='text-sm font-light leading-6'>
              You started with $10,000 and ended up with {print.totalBalance}. You paid{' '}
              <a data-tip data-for='tradingFees' className='cursor-pointer bg-slate-800 p-1'>
                <span className='text-red-600 font-extrabold'>{print.totalFees}</span> in trading
                fees
              </a>{' '}
              for your {portfolio.trades.length} trades.
            </p>
          </div>
        </div>
      </div>
      <div className='w-1/2 pl-3'>
        <div className='font-sans	p-4 text-sm flex w-full items-center justify-center rounded-md bg-slate-700 shadow-md shadow-slate-900'>
          <div className='w-[80px]'>
            {getBenchmark() > 10000 && (
              <p className='text-2xl font-bold text-green-600'>{print.totalBenchmarkReturn}</p>
            )}
            {getBenchmark() <= 10000 && (
              <p className='text-2xl font-bold text-red-600'>{print.totalBenchmarkReturn}</p>
            )}
          </div>
          <div className='flex-col ml-3 grow'>
            <p className='text-lg font-semibold'>Your Benchmark Return</p>
            <p className='text-sm font-light leading-6'>
              If you had taken your $10,000 and just bought and held you would have{' '}
              <a data-tip data-for='dividends' className='cursor-pointer bg-slate-800 p-1'>
                ended up with {print.totalBenchmark}
              </a>
              . Also, you would have only paid about $5 in trading fees.
            </p>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <div className='font-sans	p-4 mt-6 text-sm flex flex-row w-full items-stretch justify-center rounded-md bg-slate-700 shadow-md shadow-slate-900'>
          <div className='w-[120px]'>
            <img src='https://res.cloudinary.com/dkit4ixkx/image/upload/v1643158878/logo_r84qzf.svg' />
          </div>
          <div className='flex-col ml-3 grow bg-slate-600 rounded-lg p-4'>
            {getTotal() < getBenchmark() && (
              <h1 className='text-3xl'>
                You did not beat the market
                <br />
                GO BUY SOME INDEX FUNDS
              </h1>
            )}
            {getTotal() >= getBenchmark() && (
              <h1 className='text-2xl'>
                You beat the market this time? Are you confident this is repeatable? Try again and
                find out!
              </h1>
            )}
          </div>
        </div>
      </div>

      <ReactTooltip id='tradingFees' place='top' effect='solid'>
        <p>
          Trading platforms like Robinhood often advertise "free" trading.
          <br />
          While they don't charge a flat free for every trade, your orders are
          <br />
          essentially auctioned off to the highest bidder. In other words there
          <br />
          is likely an extremely sophisticated hedge fund that is most certainly
          <br />
          not giving you a good deal.
          <br />
          <br />
          For this reason every trade in our simulation is assessed a 0.1% fee to
          <br />
          account for this hidden fee.
        </p>
      </ReactTooltip>
      <ReactTooltip id='dividends' place='top' effect='solid'>
        <p>
          It gets even better! When you simply buy and hold a stock you will also
          <br />
          earn dividends on that stock which can amount to 1-5% yearly depending on
          <br />
          the type of stock. Trading in an out frequently means it is less likely
          <br />
          you will benefit from receiving dividends.
        </p>
      </ReactTooltip>
    </div>
  );
};

export default GameOver;
