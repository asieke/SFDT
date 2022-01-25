import React, { useState, useEffect } from 'react';

import { Button, Countdown } from './Elements';

const StartGame = ({ next }) => {
  const [showCountdown, setShowCountdown] = useState(false);

  const initializeGame = () => {
    setShowCountdown(true);
    setTimeout(next, 5000);
  };

  return (
    <div className='md:flex p-4 rounded-lg m-12'>
      {showCountdown && <Countdown />}
      <Button size='large' onClick={initializeGame}>
        Play
      </Button>
    </div>
  );
};

export default StartGame;
