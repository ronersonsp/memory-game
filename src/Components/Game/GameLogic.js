import React from 'react';
import { GameContext } from '../../GameContext';

const GameLogic = () => {
  const {
    setFlip,
    setMove,
    players,
    setPlayers,
    currentPlayer,
    setCurrentPlayer,
    jogador,
  } = React.useContext(GameContext);
  const flippeds = document.body.getElementsByClassName('flipped');
  const [movimento, setMovimento] = React.useState(0);
  const [acertou, setAcertou] = React.useState(false);

  React.useEffect(() => {
    if (players && currentPlayer === Number(jogador)) {
      setCurrentPlayer(0);
    }
  }, [currentPlayer, setCurrentPlayer, jogador]);

  React.useEffect(() => {
    if (!acertou) {
      if (players && movimento > 0 && movimento % 2 === 0) {
        setCurrentPlayer((oldCurrentPlayer) => oldCurrentPlayer + 1);
      }
    }
  }, [players, movimento, setCurrentPlayer, acertou]);

  function handleLogic({ target }) {
    setFlip(true);
    setAcertou(false);
    if (flippeds.length < 2) {
      target.classList.add('flipped');
      setMove((move) => move + 1);
      setMovimento(movimento + 1);
    }
    if (flippeds.length === 2) {
      if (flippeds[0].id === flippeds[1].id) {
        flippeds[1].classList.add('activeFlip');
        flippeds[0].classList.add('activeFlip');
        setMovimento((oldMovimento) => oldMovimento - 2);
        setAcertou(true);

        if (players.length > 0) {
          setPlayers((prevPlayers) => {
            const newPlayers = [...prevPlayers];
            newPlayers[currentPlayer].points += 1;
            return newPlayers;
          });
        }
      }
      resetFlip();
    }
  }

  function resetFlip() {
    setTimeout(() => {
      if (flippeds.length === 2) {
        flippeds[1].classList.remove('flipped');
        flippeds[0].classList.remove('flipped');
      }
    }, 300);
  }

  return handleLogic;
};

export default GameLogic;
