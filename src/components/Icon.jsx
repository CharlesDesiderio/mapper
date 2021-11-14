import Draggable from 'react-draggable'
import styles from './Icon.module.css'

const Icon = (props) => {

  return (
    <Draggable>
      <div className={styles.icon}>
        <img draggable="false" src={props.item.image} alt="" />
      </div>
    </Draggable>
  )
}

export default Icon