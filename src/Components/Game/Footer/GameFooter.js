import React from 'react';
import GameSinglePlayer from './GameSinglePlayer';
import GameMultiPlayer from './GameMultiPlayer';
import styles from './GameFooter.module.css';
import { GameContext } from '../../../GameContext';

const GameFooter = ({ jogador }) => {
  const { move, grid, setFinishModal, ativos } = React.useContext(GameContext);

  const total = grid === '4x4' ? 16 : 36;
  React.useEffect(() => {
    if (ativos.length === total) {
      setFinishModal(true);
    }
  }, [move]);

  return (
    <div className={styles.footer}>
      {jogador === '1' ? (
        <GameSinglePlayer />
      ) : (
        <GameMultiPlayer jogador={jogador} />
      )}
    </div>
  );
};

export default GameFooter;
