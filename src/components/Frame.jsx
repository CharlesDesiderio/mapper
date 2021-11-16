import styles from './Frame.module.css'

import Draggable from 'react-draggable'

const Frame = (props) => {
  return props.drag ? (
    <Draggable grid={[10, 10]}>
      <div className={styles.frame}>
        <input defaultValue={`New Frame`} />
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Draggable>
  ) : (
    <div className={styles.bankFrame}>
    {props.item.name}
  </div>
  )
}

export default Frame