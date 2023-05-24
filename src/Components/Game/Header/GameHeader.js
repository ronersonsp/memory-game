import React from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../../../GameContext';
import styles from './GameHeader.module.css';

const GameHeader = () => {
  const { setRestart } = React.useContext(GameContext);
	return (
		<div className={styles.header}>
			<h1>memory</h1>
			<div>
         <Link to='/' className='button' onClick={() => setRestart(true)}>Restart</Link>
				<Link to='/' className='button btnSecondary'>New Game</Link>
			</div>
		</div>
	);
};

export default GameHeader;
