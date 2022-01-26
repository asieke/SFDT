import React, { useState, useEffect } from 'react';

import { Button, Countdown } from './Elements';

const StartGame = ({ next }) => {
  const [showCountdown, setShowCountdown] = useState(false);

  const initializeGame = () => {
    setShowCountdown(true);
    setTimeout(next, 5000);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return (
    <div className='md:flex p-4 rounded-lg m-12'>
      <Countdown />
    </div>
  );
};

export default StartGame;
