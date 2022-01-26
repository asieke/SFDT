import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Game from './Game';
import StartGame from './StartGame';
import GameOver from './GameOver';

const DEFAULT = { cash: 10000, shares: 0, fees: 0, trades: [] };

const App = () => {
  const [data, setData] = useState({});
  const [status, setStatus] = useState(1);
  const [portfolio, setPortfolio] = useState({ ...DEFAULT });

  const setupGame = async () => {
    let res = await axios.get('/getPrices');
    setData(res.data);
    setPortfolio({ ...DEFAULT });
    setStatus(1);
  };

  useEffect(() => {
    setupGame();
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
      {status === 2 && <GameOver data={data} portfolio={portfolio} next={() => setupGame()} />}
    </>
  );
};

export default App;
