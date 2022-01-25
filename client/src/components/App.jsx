import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Graph from './Graph';
import { Button } from './Elements';

const App = () => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get('/getPrices');
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <div className='md:flex p-4 rounded-lg m-12 bg-slate-800'>
      <div className='md:w-1/4 flex md:mr-3 mb-3 md:mb-0'>
        <div className='flex w-full p-4 bg-slate-700'>Left Nav</div>
      </div>
      <div className='md:w-3/4 flex-col'>
        <div className='flex w-full p-4 mb-3 bg-slate-700 h-[360px]'>
          {status === 0 && (
            <Button size='large' onClick={() => setStatus(1)}>
              Play
            </Button>
          )}
          {status === 1 && <Graph data={data} done={() => setStatus(2)} />}
          {status === 2 && <h1>GAME OVER</h1>}
        </div>
        <div className='flex w-full p-4 bg-slate-700'>
          <Button>Play</Button>
        </div>
      </div>
    </div>
  );
};

export default App;
