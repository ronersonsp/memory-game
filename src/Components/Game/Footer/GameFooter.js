import React from 'react';
import GameSinglePlayer from './GameSinglePlayer';
import GameMultiPlayer from './GameMultiPlayer';
import styles from './GameFooter.module.css';
import { GameContext } from '../../../GameContext';

const GameFooter = ({ jogador }) => {
  const { move, grid, setFinishModal, ativos } = React.useContext(GameContext);
  const single = jogador === '1' ? true : false;

  const total = grid === '4x4' ? 16 : 36;
  React.useEffect(() => {
    if (ativos.length === total) {
      setFinishModal(true);
    }
  }, [move]);

  return (
    <div className={`${styles.footer} ${single ? '' : styles.footerMulti}`}>
      {single ? <GameSinglePlayer /> : <GameMultiPlayer jogador={jogador} />}
    </div>
  );
};

export default GameFooter;
