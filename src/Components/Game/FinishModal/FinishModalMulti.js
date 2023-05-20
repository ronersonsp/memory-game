import React from 'react';
import { GameContext } from '../../../GameContext';
import styles from './FinishModalMulti.module.css';

const FinishModalMulti = () => {
  const { players } = React.useContext(GameContext);
  const [winner, setWinner] = React.useState(null);
  const [othersPlayers, setOthersPlayers] = React.useState([]);
  React.useEffect(() => {
    const winnerIndex = players.reduce((winnerIndex, player, currentIndex) => {
      if (player.points > players[winnerIndex].points) {
        return currentIndex;
      } else {
        return winnerIndex;
      }
    }, 0);
    setWinner(players[winnerIndex]);
    setOthersPlayers(
      players
        .filter((_, index) => index !== winnerIndex)
        .sort((a, b) => b.points - a.points)
    );
  }, [players]);

  if (!winner && othersPlayers.length === 0) return null;
  return (
    <>
      <div className={styles.text}>
        <h1>{winner.name} Wins!</h1>
        <p>Gamer Over! Here are the results...</p>
      </div>

      <div className={styles.parameter}>
        <div className={styles.winner}>
          <p>{winner.name} (Winner!)</p>
          <span>{winner.points} Pairs</span>
        </div>

        {othersPlayers.map((others, index) => (
          <div key={index}>
          <p>{others.name}</p>
          <span>{others.points} Pairs</span>
        </div>
        ))}

      </div>
    </>
  );
};

export default FinishModalMulti;
