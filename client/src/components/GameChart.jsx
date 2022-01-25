import React, { useState, useEffect } from 'react';

const GameChart = ({ data, step }) => {
  let display = (data.prices || []).filter((x, i) => i < step && i >= step - 100);
  const MAX = 1.02 * display.reduce((a, b) => Math.max(b.high, a), 0);
  const MIN = 0.98 * display.reduce((a, b) => Math.min(b.low, a), 1000000);
  const priceToPosition = (price) => {
    return ((MAX - price) / (MAX - MIN)) * 360;
  };

  return (
    <div className='flex w-full p-4 mb-3 bg-slate-700 h-[400px]'>
      <div className='graph-container'>
        <div className='graph-inner' style={{ width: display.length * 10 }}>
          {display.map((x, i) => {
            const open = priceToPosition(x.open);
            const close = priceToPosition(x.close);

            if (x.close >= x.open) {
              return (
                <div className='bar-container' key={i}>
                  <div
                    className='bar-up'
                    style={{ marginTop: Math.floor(close), height: Math.abs(open - close) }}
                  />
                </div>
              );
            } else {
              return (
                <div className='bar-container' key={i}>
                  <div
                    className='bar-down'
                    style={{ marginTop: Math.floor(open), height: Math.abs(open - close) }}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default GameChart;
