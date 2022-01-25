import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({});
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get('/getPrices');
      setData({ticker: res.data.ticker, start: res.data.start, end: res.data.end});
      setPrices(res.data.prices);
    }
    getData();
  }, [])

  console.log(data, prices);

  return (
    <div className='md:flex p-4 rounded-lg m-12 bg-slate-800'>
        <div className='md:w-1/4 flex md:mr-3 mb-3 md:mb-0'>
          <div className='flex w-full p-4 bg-slate-700'>
            Left Nav
          </div>
        </div>
        <div className='md:w-3/4 flex-col'>
          <div className='flex w-full p-4 mb-3 bg-slate-700'>
            Main Game
          </div>
          <div className='flex w-full p-4 bg-slate-700'>
            Hello there how are you
          </div>
        </div>
    </div>
  )
}



export default App;