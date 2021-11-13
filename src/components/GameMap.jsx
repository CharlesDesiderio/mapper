import styles from './GameMap.module.css';

import worldMap from '../images/map.png';
import Icon from './Icon';

const GameMap = () => {
  const items = [
    {
      name: 'Arrow',
      image: '/icons/arrow.png'
    },
    {
      name: 'Blue Candle',
      image: '/icons/bluecandle.png'
    },
    {
      name: 'Bomb',
      image: '/icons/bomb.png'
    },
    {
      name: 'Boomerang',
      image: '/icons/boomerang.png'
    },
    {
      name: 'Bow',
      image: '/icons/bow.png'
    },
    {
      name: 'Magic Boomerang',
      image: '/icons/magicboomerang.png'
    },
  ];

  return (
    <div style={{ backgroundImage: `url(${worldMap})` }} className={styles.gameMap}>
      {/* <img src={worldMap} alt="Map" /> */}
      <div className={styles.iconContainer}>
      { items.map((item) => {
        return <Icon item={item} />
      }) }      

      </div>
    </div>
  );
};

export default GameMap;
