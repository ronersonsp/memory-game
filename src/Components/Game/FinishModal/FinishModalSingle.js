import React from 'react';
import styles from './FinishModalSingle.module.css';
import { GameContext } from '../../../GameContext';

const FinishModalSingle = () => {
  const { finalTimer, move } = React.useContext(GameContext);
  return (
    <>
      <div className={styles.text}>
        <h1>You did it!</h1>
        <p>Gamer Over! Here's how you got on...</p>
      </div>

      <div className={styles.parameter}>
        <div>
          <p>Time Elapsed</p>
          <span>{finalTimer}</span>
        </div>
        <div>
          <p>Moves Taken</p>
          <span>{move}</span>
        </div>
      </div>
    </>
  );
};

export default FinishModalSingle;
