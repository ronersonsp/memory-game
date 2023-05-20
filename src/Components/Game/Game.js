import React from 'react';
import { GameContext } from '../../GameContext';
import GameHeader from './Header/GameHeader';
import GameGrid from './Grid/GameGrid';
import GameFooter from './Footer/GameFooter';
import { useNavigate } from 'react-router-dom';
import FinishModal from './FinishModal/FinishModal';
import styles from './Game.module.css';
import './GameGlobal.css';

const Game = () => {
  const navigate = useNavigate();
  const { tema, jogador, grid, icon, setIcon, finishModal } = React.useContext(GameContext);

  React.useEffect(() => {
    if (!grid || !tema) navigate('/');
    if (tema && tema.includes('Numbers')) setIcon(null);
  }, [grid, tema, navigate, setIcon]);

  if (!grid || !tema) return null;
  return (
    <div className={styles.game}>
      {finishModal && <FinishModal />}
      <GameHeader />
      <GameGrid grid={grid} tema={tema} icon={icon} />
      <GameFooter jogador={jogador} />
    </div>
  );
};

export default Game;
