import { useState } from 'react';
import styles from './Bank.module.css'
import Frame from './Frame';

import Icon from './Icon';

const Bank = (props) => {

  const items = [
    {
      name: 'Arrow',
      image: '/icons/arrow.png',
      x: 0,
      y: 0
    },
    {
      name: 'Blue Candle',
      image: '/icons/bluecandle.png',
      x: 0,
      y: 0
    },
    {
      name: 'Bomb',
      image: '/icons/bomb.png',
      x: 0,
      y: 0
    },
    {
      name: 'Boomerang',
      image: '/icons/boomerang.png',
      x: 0,
      y: 0
    },
    {
      name: 'Bow',
      image: '/icons/bow.png',
      x: 0,
      y: 0
    },
    {
      name: 'Magic Boomerang',
      image: '/icons/magicboomerang.png',
      x: 0,
      y: 0
    },
    {
      name: 'Silver Arrow',
      image: '/icons/silverarrow.png',
      x: 0,
      y: 0
    },
    {
      name: 'Red Candle',
      image: '/icons/redcandle.png',
      x: 0,
      y: 0
    },
    {
      name: 'Flute',
      image: '/icons/flute.png',
      x: 0,
      y: 0
    },
    {
      name: 'Food',
      image: '/icons/food.png',
      x: 0,
      y: 0
    },
    {
      name: 'Letter',
      image: '/icons/letter.png',
      x: 0,
      y: 0
    },
    {
      name: 'Life Potion',
      image: '/icons/lifepotion.png',
      x: 0,
      y: 0
    },
    {
      name: 'Second Potion',
      image: '/icons/secondpotion.png',
      x: 0,
      y: 0
    },
    {
      name: 'Magical Rod',
      image: '/icons/magicalrod.png',
      x: 0,
      y: 0
    },
    {
      name: 'Book of Magic',
      image: '/icons/bookofmagic.png',
      x: 0,
      y: 0
    },
    {
      name: 'Sword',
      image: '/icons/sword.png',
      x: 0,
      y: 0
    },
    {
      name: 'White Sword',
      image: '/icons/whitesword.png',
      x: 0,
      y: 0
    },
    {
      name: 'Magical Sword',
      image: '/icons/magicalsword.png',
      x: 0,
      y: 0
    },
    {
      name: 'Wooden Shield',
      image: '/icons/woodenshield.png',
      x: 0,
      y: 0
    },
    {
      name: 'Magical Shield',
      image: '/icons/magicalshield.png',
      x: 0,
      y: 0
    },
    {
      name: 'Blue Ring',
      image: '/icons/bluering.png',
      x: 0,
      y: 0
    },
    {
      name: 'Red Ring',
      image: '/icons/redring.png',
      x: 0,
      y: 0
    },
    {
      name: 'Power Bracelet',
      image: '/icons/powerbracelet.png',
      x: 0,
      y: 0
    },
    {
      name: 'Map',
      image: '/icons/map.png',
      x: 0,
      y: 0
    },
    {
      name: 'Compass',
      image: '/icons/compass.png',
      x: 0,
      y: 0
    },
    {
      name: 'Key',
      image: '/icons/key.png',
      x: 0,
      y: 0
    },
    {
      name: 'Magical Key',
      image: '/icons/magicalkey.png',
      x: 0,
      y: 0
    },
    {
      name: 'Raft',
      image: '/icons/raft.png',
      x: 0,
      y: 0
    },
    {
      name: 'Step Ladder',
      image: '/icons/stepladder.png',
      x: 0,
      y: 0
    },
    {
      name: 'Triforce Shard',
      image: '/icons/triforceshard.png',
      x: 0,
      y: 0
    },
    {
      name: 'Heart Container',
      image: '/icons/heartcontainer.png',
      x: 0,
      y: 0
    },
    {
      name: 'Heart',
      image: '/icons/heart.png',
      x: 0,
      y: 0
    },
    {
      name: 'Fairy',
      image: '/icons/fairy.png',
      x: 0,
      y: 0
    },
    {
      name: 'Yellow Rupee',
      image: '/icons/yellowrupee.png',
      x: 0,
      y: 0
    },
    {
      name: 'Blue Rupee',
      image: '/icons/bluerupee.png',
      x: 0,
      y: 0
    },
    {
      name: 'Clock',
      image: '/icons/clock.png',
      x: 0,
      y: 0
    },
    {
      name: 'Dungeon Marker',
      image: '',
      x: 0,
      y: 0
    },
    {
      name: 'Shop Marker',
      image: '',
      x: 0,
      y: 0
    }
  ];

  let [leftPosition, setLeftPosition] = useState('0px')
  let [toggleIcon, setToggleIcon] = useState('↩')

  const toggleBank = () => {
    if (leftPosition === `0px`) {
      setLeftPosition(`-500px`)
      setToggleIcon('↪')
    } else {
      setLeftPosition(`0px`)
      setToggleIcon('↩')
    }
  }

  return (
    <div style={{ left: leftPosition }} className={styles.bank}><div onClick={toggleBank} className={styles.slider}>{toggleIcon}</div>
      { items.map((item) => {
        if (item.name === 'Dungeon Marker' || item.name === 'Shop Marker') {
          return <div key={`bank-${item.name}`} onClick={() => props.updateItem(item)} ><Frame item={item} /></div>
        } else {
          return <div key={`bank-${item.name}`} onClick={() => props.updateItem(item)} ><Icon item={item} /></div>
        }
      }) }    
    </div>
  )
}

export default Bank