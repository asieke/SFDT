import React, { useState, useEffect } from 'react';
import useInterval from '../lib/useInterval';

const HEIGHT = 360;

const Graph = ({ data, done }) => {
  const [step, setStep] = useState(100);

  let display = (data.prices || []).filter((x, i) => i < step && i >= step - 100);

  const MAX = 1.02 * display.reduce((a, b) => Math.max(b.high, a), 0);
  const MIN = 0.98 * display.reduce((a, b) => Math.min(b.low, a), 1000000);

  const priceToPosition = (price) => {
    return ((MAX - price) / (MAX - MIN)) * 360;
  };

  useInterval(() => {
    if (step < 1000) {
      setStep(step + 1);
    } else {
      done();
    }
  }, 67);

  console.log(step);

  return (
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
  );
};

//fixed height 360px, based on price, returns how many pixels offset from top

export default Graph;
