import styles from './Frame.module.css'

import Draggable from 'react-draggable'

const Frame = (props) => {

  if (props.drag && props.item.name === 'Dungeon Marker') return (
    <Draggable
      grid={[10, 10]}
      position={{ x: props.item.x, y:props.item.y }} 
      onDrag={(e, data) => props.handleStop(props.i, data.x, data.y)}
    >
      <div className={styles.frame}>
        <span className={styles.removeButton} onClick={() => props.removeItem(props.item)}>❌</span>
        <input className={styles.titleInput} placeholder={`New Dungeon`} />
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Draggable>
  ) 

  if (props.drag && props.item.name === 'Shop Marker') return (
    <Draggable
      grid={[10, 10]}
      position={{ x: props.item.x, y:props.item.y }} 
      onDrag={(e, data) => props.handleStop(props.i, data.x, data.y)}
    >
    <div className={styles.rupeeFrame}>
      <span className={styles.removeButton} onClick={() => props.removeItem(props.item)}>❌</span>
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
    {props.item.name}
  </div>
  )
}

export default Frame