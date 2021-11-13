import styles from './GameMap.module.css';

import worldMap from '../images/map.png';
import Icon from './Icon';

const GameMap = () => {
  const items = [
    {
      name: 'coin',
    },
    {
      name: 'sword',
    },
    {
      name: 'big shield',
    },
  ];

  return (
    <div className={styles.gameMap}>
      <img src={worldMap} alt="Map" />
      { items.map((item) => {
        return <Icon name={item.name} />
      }) }      
    </div>
  );
};

export default GameMap;
