import React from 'react';
import styles from './FinishModal.module.css';
import { GameContext } from '../../../GameContext';
import FinishModalSingle from './FinishModalSingle';
import FinishModalMulti from './FinishModalMulti';
import { Link } from 'react-router-dom';


const FinishModal = () => {
  const { jogador, setRestart } = React.useContext(GameContext);

  return (
    <div className={styles.finishModalContainer}>
      <div className={styles.finishModal}>
        <div className={styles.container}>
          {jogador === '1' ? <FinishModalSingle /> : <FinishModalMulti />}

          <div className={styles.buttons}>
            <Link to='/' className='button' onClick={() => setRestart(true)}>Restart</Link>
            <Link to='/' className='button btnSecondary'>Setup New Game</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishModal;
