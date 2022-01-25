import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Game from './Game';
import StartGame from './StartGame';
import GameOver from './GameOver';

const App = () => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState(0);
  const [portfolio, setPortfolio] = useState({
    cash: 10000,
    shares: 0,
    fees: 0,
    trades: [],
  });

  useEffect(() => {
    const getData = async () => {
      let res = await axios.get('/getPrices');
      setData(res.data);
    };
    getData();
  }, []);

  return (
    <>
      {status === 0 && <StartGame next={() => setStatus(1)} />}
      {status === 1 && data.prices && (
        <Game
          data={data}
          next={() => setStatus(2)}
          portfolio={portfolio}
          setPortfolio={setPortfolio}
        />
      )}
      {status === 2 && <GameOver data={data} portfolio={portfolio} />}
    </>
  );
};

export default App;
