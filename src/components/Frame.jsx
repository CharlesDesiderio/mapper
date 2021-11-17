import styles from './Frame.module.css'

import Draggable from 'react-draggable'

const Frame = (props) => {

  let posX = 0;
  let posY = 0;

if (props.position)  {
  posX = Math.ceil(Math.abs(props.position.current.getBoundingClientRect().x) / 10) * 10
  posY = Math.ceil(Math.abs(props.position.current.getBoundingClientRect().y) / 10) * 10
}

  if (props.drag && props.item.name === 'Dungeon Marker') return (
    <Draggable grid={[10, 10]} defaultPosition={{x: posX, y: posY}}>
      <div className={styles.frame}>
        <input className={styles.titleInput} placeholder={`New Dungeon`} />
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Draggable>
  ) 

  if (props.drag && props.item.name === 'Shop Marker') return (
    <Draggable grid={[10, 10]} defaultPosition={{x: posX, y: posY}}>
    <div className={styles.rupeeFrame}>
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