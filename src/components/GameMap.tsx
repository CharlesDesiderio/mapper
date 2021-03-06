import styles from './GameMap.module.css';

import worldMap from '../images/map.png';
import Bank from './Bank';
import Icon from './Icon'
import { useRef, useState } from 'react';
import Frame from './Frame';
import DeleteButton from './DeleteButton';

const GameMap = () => {

  const mapRef = useRef<any>()

  let initialState

  if (window.localStorage.getItem("zeldaMapperState")) {
    initialState = JSON.parse(window.localStorage.getItem("zeldaMapperState") || '{}')
  } else {
    initialState = []
  }

  const [itemList, setItemList] = useState(initialState)

  const addItemToList = (item: { name: string, image: string, x: number, y: number }) => {

    let posX = Math.ceil(Math.abs(mapRef.current.getBoundingClientRect().x) / 10) * 10
    let posY = Math.ceil(Math.abs(mapRef.current.getBoundingClientRect().y) / 10) * 10

    let newState = itemList
    itemList.push(item)
    item.x = posX
    item.y = posY
    setItemList([...newState])
    window.localStorage.setItem("zeldaMapperState", JSON.stringify(itemList))
  }

  const removeItem = (item: { name: string, image: string, x: number, y: number }) => {
    let newState = itemList
    newState.splice(itemList.indexOf(item), 1)
    setItemList([...newState])
    window.localStorage.setItem("zeldaMapperState", JSON.stringify(itemList))
  }

  const handleStop = (i: number, x: number, y: number) => {
    let newState = itemList
    newState[i].x = x
    newState[i].y = y
    setItemList([...newState])
    window.localStorage.setItem("zeldaMapperState", JSON.stringify(itemList))
  }

  const clearStorage = () => {
    localStorage.removeItem("zeldaMapperState")
    setItemList([])
  }

  return (
    <div ref={mapRef} style={{ backgroundImage: `url(${worldMap})` }} className={styles.gameMap}>
      { window.localStorage.getItem("zeldaMapperState") ? <DeleteButton clearStorage={clearStorage} /> : '' }
      <Bank updateItem={addItemToList} />

      { itemList.map((item: { name: string, image: string, x: number, y: number }, i: number) => {
        if (item.name === 'Dungeon Marker' || item.name === 'Shop Marker') {
          return <Frame key={`iconItem-${i}`} drag={true} item={item} i={i} removeItem={removeItem} handleStop={handleStop} />
        } else {
          return <Icon key={`iconItem-${i}`} drag={true} item={item} i={i} removeItem={removeItem} handleStop={handleStop} />
        }
      }) }

    </div>
  );
};

export default GameMap;
