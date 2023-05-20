import React from 'react';

export const GameContext = React.createContext();

export const GameStorage = ({ children }) => {
  const [tema, setTema] = React.useState(null);
  const [jogador, setJogador] = React.useState(null);
  const [grid, setGrid] = React.useState(null);
  const [icon, setIcon] = React.useState(null);
  const [flip, setFlip] = React.useState(false);
  const [move, setMove] = React.useState(0);
  const [players, setPlayers] = React.useState([]);
  const [currentPlayer, setCurrentPlayer] = React.useState(0);
  const [finishModal, setFinishModal] = React.useState(false);
  const [finalTimer, setFinalTimer] = React.useState(null);
  const [ativos, setAtivos] = React.useState(
    document.body.getElementsByClassName('activeFlip')
    );
  const [restart, setRestart] = React.useState(false);

  return (
    <GameContext.Provider
      value={{
        tema,
        jogador,
        grid,
        setTema,
        setJogador,
        setGrid,
        icon,
        setIcon,
        flip,
        setFlip,
        move,
        setMove,
        players,
        setPlayers,
        currentPlayer,
        setCurrentPlayer,
        finishModal,
        setFinishModal,
        finalTimer,
        setFinalTimer,
        ativos,
        restart, setRestart
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
