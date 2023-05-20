import React from 'react';
import GameTimer from './GameTimer';
import { GameContext } from '../../../GameContext';

const GameSinglePlayer = () => {
  const { move, grid, setFinalTimer, ativos } = React.useContext(GameContext);
  const { timer, stopTimer } = GameTimer();

  const total = grid === '4x4' ? 16 : 36;

  React.useEffect(() => {
    if (ativos.length === total) {
      stopTimer();
      setFinalTimer(timer);
    }
  }, [move]);

  return (
    <>
      <div>
        <p>Timer</p>
        <span>{timer}</span>
      </div>

      <div>
        <p>Moves</p>
        <span>{move}</span>
      </div>
    </>
  );
};

export default GameSinglePlayer;
