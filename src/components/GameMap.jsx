import styles from './GameMap.module.css';

import worldMap from '../images/map.png';
import Bank from './Bank';

const GameMap = () => {

  return (
    <div style={{ backgroundImage: `url(${worldMap})` }} className={styles.gameMap}>
      <Bank />
    </div>
  );
};

export default GameMap;
