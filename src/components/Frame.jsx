import styles from './Frame.module.css'

import Draggable from 'react-draggable'

const Frame = (props) => {
  if (props.drag && props.item.name === 'Dungeon Marker') return (
    <Draggable grid={[10, 10]}>
      <div className={styles.frame}>
        <input defaultValue={`New Frame`} />
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Draggable>
  ) 

  if (props.drag && props.item.name === 'Shop Marker') return (
    <Draggable grid={[10, 10]}>
    <div className={styles.frame}>
      <input defaultValue={`Shop Frame`} />
      <div></div>
      <div></div>
      <div></div>
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