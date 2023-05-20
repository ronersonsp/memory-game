import React from 'react';
import animals from '../../../Icones/Animals';
import farm from '../../../Icones/Farm';
import GameLogic from '../GameLogic';

const GameIcon = ({ tema, gridCheck, iconCheck }) => {
  const handleLogic = GameLogic();
  const [iconItems, setIconItems] = React.useState([]);

  React.useEffect(() => {
    const iconTheme = iconCheck ? animals : farm;
    const icon = iconTheme;
    const iconFinal = gridCheck
      ? [...icon['4x4']]
      : [...icon['4x4'], ...icon['6x6']];

    const newIconItems = iconFinal
      .concat(iconFinal)
      .sort(() => Math.random() - 0.5);

    setIconItems(newIconItems);
  }, []);

  return iconItems.map((src, index) => (
    <span key={index} id={src} onClick={handleLogic}>
      <img src={src} />
    </span>
  ));
};

export default GameIcon;
