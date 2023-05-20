import React from 'react';
import styles from './GameGrid.module.css';
import GameIcon from './GameIcon';
import GameNumber from './GameNumber';

const GameGrid = ({ grid, tema, icon }) => {
  const gridCheck = grid === '4x4';
  const numberCheck = tema.includes('Numbers');
  const iconCheck = icon && icon.includes('Animals');

  return (
    <div
      className={`${gridCheck ? styles.grid4 : styles.grid6} ${
        styles.gridContainer
      }`}
    >
      {numberCheck ? (
        <GameNumber gridCheck={gridCheck} />
      ) : (
        <GameIcon tema={tema} gridCheck={gridCheck} iconCheck={iconCheck} />
      )}
    </div>
  );
};

export default GameGrid;
