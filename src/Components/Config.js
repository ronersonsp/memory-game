import React from 'react';
import Input from './Form/Input';
import styles from './Config.module.css';
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../GameContext';

const Config = () => {
  const {
    tema,
    setTema,
    jogador,
    setJogador,
    grid,
    setGrid,
    setIcon,
    setMove,
    setPlayers,
    setFinishModal,
    setFinalTimer,
    restart,
    setRestart,
    setCurrentPlayer,
  } = React.useContext(GameContext);
  const navigate = useNavigate();
  const themeCheck = tema && tema.includes('Icons');

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/game');
  }

  React.useEffect(() => {
    if (!restart) {
      setTema(null);
      setJogador(null);
      setGrid(null);
      setIcon(null);
    } else {
      setRestart(false);
      navigate('/game');
    }
    setMove(0);
    setPlayers([]);
    setFinishModal(false);
    setFinalTimer(null);
    setCurrentPlayer(0);
  }, [setTema, setJogador, setGrid, setIcon, setMove, setFinishModal, setFinalTimer]);

  return (
    <div className={`${styles.config} ${themeCheck ? styles.a : ''}`}>
      <h1>memory</h1>

      <form className={styles.configForm} onSubmit={handleSubmit}>
        <p>Select Theme:</p>
        <Input
          quantidade={['Numbers', 'Icons']}
          id='tema'
          setValue={setTema}
          required
        />
        {tema && themeCheck && (
          <>
            <p className='appear'>Choose icon style:</p>
            <Input
              quantidade={['Farm', 'Animals']}
              id='icons'
              setValue={setIcon}
              classe={true}
              required
            />
          </>
        )}
        <p>Numbers of Players:</p>
        <Input
          quantidade={['1', '2', '3', '4']}
          id='jogadores'
          setValue={setJogador}
          required
        />
        <p>Grid Size:</p>
        <Input
          quantidade={['4x4', '6x6']}
          id='gridSize'
          setValue={setGrid}
          required
        />
        {tema && jogador && grid ? (
          <button className='button'>start game</button>
        ) : (
          <button className={styles.btnDisabled} disabled>
            start game
          </button>
        )}
      </form>
    </div>
  );
};

export default Config;
