import React from 'react';
import { GameContext } from '../../../GameContext';
import styles from './GameMultiPlayer.module.css';

const GameMultiPlayer = ({ jogador }) => {
  const { players, setPlayers, currentPlayer } = React.useContext(GameContext);

  React.useEffect(() => {
    const num = Number(jogador);
    setPlayers(
      Array.from({ length: num }, (_, index) => ({
        name: `Player ${index + 1}`,
        points: 0,
      }))
    );
  }, [jogador, setPlayers]);

  return (
    <>
      {players &&
        players.map((player, index) => {
          return (
            <div
              key={index}
              className={currentPlayer === index ? styles.active : ''}
            >
              <p>{player.name}</p>
              <span>{player.points}</span>
            </div>
          );
        })}
    </>
  );
};

export default GameMultiPlayer;
