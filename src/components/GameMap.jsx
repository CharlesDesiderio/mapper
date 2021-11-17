import styles from './GameMap.module.css';

import worldMap from '../images/map.png';
import Bank from './Bank';
import Icon from './Icon'
import { useState } from 'react';
import Frame from './Frame';

const GameMap = () => {

  const [itemList, setItemList] = useState([])

  const addItemToList = (item) => {
    let newState = itemList
    itemList.push(item)
    setItemList([...newState])
  }

  return (
    <div style={{ backgroundImage: `url(${worldMap})` }} className={styles.gameMap}>
      <Bank updateItem={addItemToList} />

      { itemList.map((item) => {
        if (item.name === 'Dungeon Marker' || item.name === 'Shop Marker') {
          return <Frame drag={true} item={item} />
        } else {
          return <Icon drag={true} item={item} />
        }
      }) }

    </div>
  );
};

export default GameMap;
