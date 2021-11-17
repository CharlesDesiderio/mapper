import Draggable from 'react-draggable'
import styles from './Icon.module.css'

const Icon = (props) => {

  let posX = 0;
  let posY = 0;

if (props.position)  {
  posX = Math.ceil(Math.abs(props.position.current.getBoundingClientRect().x) / 10) * 10
  posY = Math.ceil(Math.abs(props.position.current.getBoundingClientRect().y) / 10) * 10
}

  return props.drag ? (
    <Draggable grid={[10, 10]} defaultPosition={{x: posX, y: posY}} >
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