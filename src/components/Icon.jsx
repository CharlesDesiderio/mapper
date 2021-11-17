import Draggable from 'react-draggable'
import styles from './Icon.module.css'

const Icon = (props) => {

  return props.drag ? (
    <Draggable grid={[10, 10]}>
      <div className={styles.draggableIcon}>
        <span className={styles.removeButton} onClick={() => props.removeItem(props.item)}>❌</span>
        <img draggable="false" src={props.item.image} alt="" />
      </div>
    </Draggable>
  ) : (
  <div className={styles.icon}>
    <img draggable="false" src={props.item.image} alt="" />
  </div>
)

}

export default Icon