import React from 'react';
import GameLogic from '../GameLogic';
import styles from './GameNumber.module.css';

const GameNumber = ({ gridCheck }) => {
  const handleLogic = GameLogic();
  const [gridItems, setGridItems] = React.useState([]);

  React.useState(() => {
    let gridNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
    if (!gridCheck)
      gridNumbers = [...gridNumbers, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    const newGridItems = gridNumbers
      .concat(gridNumbers)
      .sort(() => Math.random() - 0.5);

    setGridItems(newGridItems);
  }, []);

  return gridItems.map((item, index) => (
    <span key={index} id={item} onClick={handleLogic} className={styles.number}>
      <p>{item}</p>
    </span>
  ));
};

export default GameNumber;
