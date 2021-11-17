import { useState } from 'react';
import styles from './Bank.module.css'
import Frame from './Frame';

import Icon from './Icon';

const Bank = (props) => {

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
    {
      name: 'Silver Arrow',
      image: '/icons/silverarrow.png'
    },
    {
      name: 'Red Candle',
      image: '/icons/redcandle.png'
    },
    {
      name: 'Flute',
      image: '/icons/flute.png'
    },
    {
      name: 'Food',
      image: '/icons/food.png'
    },
    {
      name: 'Letter',
      image: '/icons/letter.png'
    },
    {
      name: 'Life Potion',
      image: '/icons/lifepotion.png'
    },
    {
      name: 'Second Potion',
      image: '/icons/secondpotion.png'
    },
    {
      name: 'Magical Rod',
      image: '/icons/magicalrod.png'
    },
    {
      name: 'Book of Magic',
      image: '/icons/bookofmagic.png'
    },
    {
      name: 'Sword',
      image: '/icons/sword.png'
    },
    {
      name: 'White Sword',
      image: '/icons/whitesword.png'
    },
    {
      name: 'Magical Sword',
      image: '/icons/magicalsword.png'
    },
    {
      name: 'Wooden Shield',
      image: '/icons/woodenshield.png'
    },
    {
      name: 'Magical Shield',
      image: '/icons/magicalshield.png'
    },
    {
      name: 'Blue Ring',
      image: '/icons/bluering.png'
    },
    {
      name: 'Red Ring',
      image: '/icons/redring.png'
    },
    {
      name: 'Power Bracelet',
      image: '/icons/powerbracelet.png'
    },
    {
      name: 'Map',
      image: '/icons/map.png'
    },
    {
      name: 'Compass',
      image: '/icons/compass.png'
    },
    {
      name: 'Key',
      image: '/icons/key.png'
    },
    {
      name: 'Magical Key',
      image: '/icons/magicalkey.png'
    },
    {
      name: 'Raft',
      image: '/icons/raft.png'
    },
    {
      name: 'Step Ladder',
      image: '/icons/stepladder.png'
    },
    {
      name: 'Triforce Shard',
      image: '/icons/triforceshard.png'
    },
    {
      name: 'Heart Container',
      image: '/icons/heartcontainer.png'
    },
    {
      name: 'Heart',
      image: '/icons/heart.png'
    },
    {
      name: 'Fairy',
      image: '/icons/fairy.png'
    },
    {
      name: 'Yellow Rupee',
      image: '/icons/yellowrupee.png'
    },
    {
      name: 'Blue Rupee',
      image: '/icons/bluerupee.png'
    },
    {
      name: 'Clock',
      image: '/icons/clock.png'
    },
    {
      name: 'Dungeon Marker',
      image: ''
    },
    {
      name: 'Shop Marker',
      image: ''
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