import styles from './Frame.module.css'

import Draggable from 'react-draggable'

interface frameProps {
  drag: boolean
  item: {
    name: string
    image: string
    x: number
    y: number
  }
  handleStop: (i: number, x: number, y: number) => void
  removeItem: (item: { name: string, image: string, x: number, y: number }) => void
  i: number
}

const Frame = ({ drag, item, handleStop, removeItem, i }: frameProps) => {

  if (drag && item.name === 'Dungeon Marker') return (
    <Draggable
      grid={[10, 10]}
      position={{ x: item.x, y:item.y }} 
      onDrag={(e, data) => handleStop(i, data.x, data.y)}
    >
      <div className={styles.frame}>
        <span className={styles.removeButton} onClick={() => removeItem(item)}>❌</span>
        <input className={styles.titleInput} placeholder={`New Dungeon`} />
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Draggable>
  ) 

  if (drag && item.name === 'Shop Marker') return (
    <Draggable
      grid={[10, 10]}
      position={{ x: item.x, y:item.y }} 
      onDrag={(e, data) => handleStop(i, data.x, data.y)}
    >
    <div className={styles.rupeeFrame}>
      <span className={styles.removeButton} onClick={() => removeItem(item)}>❌</span>
      <input className={styles.titleInput} placeholder={`New Shop`} />
      <div></div>
      <div></div>
      <div></div>
      <div className={styles.rupeeInputContainer}>
        <input className={styles.frameShopInput} placeholder={`0`} /><img src={`/icons/yellowrupee.png`} alt="Rupee" />
      </div>
      <div className={styles.rupeeInputContainer}>
        <input className={styles.frameShopInput} placeholder={`0`} /><img src={`/icons/yellowrupee.png`} alt="Rupee" />
      </div>
      <div className={styles.rupeeInputContainer}>
        <input className={styles.frameShopInput} placeholder={`0`} /><img src={`/icons/yellowrupee.png`} alt="Rupee" />
      </div>
    </div>
  </Draggable>
  )
  
  else
    return (
    <div className={styles.bankFrame}>
    {item.name}
  </div>
  )
}

export default Frame