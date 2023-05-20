import React from 'react';

const GameTimer = () => {
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(true);

  React.useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          setSeconds(0);
        } else {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const timer = (
    <>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </>
  );

  const stopTimer = () => {
    setIsRunning(false);
  };

  return { timer, stopTimer };
};

export default GameTimer;
