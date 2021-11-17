import styles from './GameMap.module.css';

import worldMap from '../images/map.png';
import Bank from './Bank';
import Icon from './Icon'
import { useRef, useState } from 'react';
import Frame from './Frame';

const GameMap = () => {

  const mapRef = useRef()

  const [itemList, setItemList] = useState([])

  const addItemToList = (item) => {
    let newState = itemList
    itemList.push(item)
    setItemList([...newState])
  }

  const removeItem = (item) => {
    console.log(itemList.indexOf(item))
    let newState = itemList
    newState[itemList.indexOf(item)].name = 'Blank'
    newState[itemList.indexOf(item)].image = ''
    setItemList([...newState])
  }

  return (
    <div ref={mapRef} style={{ backgroundImage: `url(${worldMap})` }} className={styles.gameMap}>
      <Bank updateItem={addItemToList} />

      { itemList.map((item, i) => {
        if (item.name === 'Blank') return ''
        else if (item.name === 'Dungeon Marker' || item.name === 'Shop Marker') {
          return <Frame key={`iconItem-${i}`} position={mapRef} drag={true} item={item} />
        } else {
          return <Icon key={`iconItem-${i}`} position={mapRef} drag={true} item={item} removeItem={removeItem} />
        }
      }) }

    </div>
  );
};

export default GameMap;
