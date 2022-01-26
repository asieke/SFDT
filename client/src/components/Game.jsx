import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useInterval from '../lib/useInterval';
import GameStats from './GameStats';
import GameChart from './GameChart';
import GameControls from './GameControls';
import { CompletionBar } from './Elements';

const Game = ({ data, next, portfolio, setPortfolio }) => {
  const [step, setStep] = useState(100);
  const completionPct = (100 * (step - 100)) / 900;

  useInterval(() => {
    if (step < 999) {
      setStep(step + 1);
    } else {
      next();
    }
  }, 10);

  const buy = (pct = 1) => {
    let amount = portfolio.cash * pct;
    let fee = amount * 0.001;
    let shares = amount / data.prices[step].avg;
    let trade = {
      action: 'buy',
      amount,
      fee,
      shares,
      price: data.prices[step].avg,
    };
    let temp = {
      cash: portfolio.cash - amount - fee,
      shares: portfolio.shares + shares,
      fees: portfolio.fees + fee,
      trades: [...portfolio.trades, trade],
    };
    setPortfolio(temp);
  };

  const sell = (pct = 1) => {
    let shares = portfolio.shares * pct;
    let amount = shares * data.prices[step].avg;
    let fee = amount * 0.001;
    let trade = {
      action: 'sell',
      amount,
      fee,
      shares,
      price: data.prices[step].avg,
    };
    let temp = {
      cash: portfolio.cash + amount - fee,
      shares: portfolio.shares - shares,
      fees: portfolio.fees + fee,
      trades: [...portfolio.trades, trade],
    };
    setPortfolio(temp);
  };

  return (
    <div className='md:flex p-4 rounded-lg m-12 bg-slate-800'>
      <div className='md:w-1/4 flex md:mr-3 mb-3 md:mb-0'>
        <GameStats portfolio={portfolio} quote={data.prices[step]} />
      </div>
      <div className='md:w-3/4 flex-col'>
        <CompletionBar completionPct={completionPct} />
        <GameChart data={data} step={step} />
        <GameControls buy={() => buy()} sell={() => sell()} />
      </div>
    </div>
  );
};

//fixed height 360px, based on price, returns how many pixels offset from top

export default Game;
