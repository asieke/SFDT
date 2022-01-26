import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Game from './Game';
import GameOver from './GameOver';
import Onboarding from './Onboarding';

const DEFAULT = { cash: 10000, shares: 0, fees: 0, trades: [] };

const App = () => {
  //0 = Onboarding, 1 = Gameplay, 2 = Gameover
  const [status, setStatus] = useState(0);
  const [data, setData] = useState({});
  const [stats, setStats] = useState({});
  const [portfolio, setPortfolio] = useState({ ...DEFAULT });

  const setupGame = async () => {
    let res = await axios.get('/getPrices');
    let res2 = await axios.get('/getData');
    setData(res.data);
    setPortfolio({ ...DEFAULT });
    setStats(res2.data);
    setStatus(1);
  };

  return (
    <>
      {status === 0 && <Onboarding next={() => setupGame()} />}
      {status === 1 && data.prices && (
        <Game
          data={data}
          next={() => setStatus(2)}
          portfolio={portfolio}
          setPortfolio={setPortfolio}
        />
      )}
      {status === 2 && (
        <GameOver data={data} portfolio={portfolio} stats={stats} next={() => setupGame()} />
      )}
    </>
  );
};

export default App;
