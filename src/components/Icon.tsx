import Draggable from 'react-draggable';
import styles from './Icon.module.css';

interface iconProps {
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

const Icon = ({ drag, item, handleStop, removeItem, i }: iconProps): JSX.Element => {
  return drag ? (
    <Draggable
      grid={[10, 10]}
      position={{ x: item.x, y: item.y }}
      onDrag={(e, data) => handleStop(i, data.x, data.y)}
    >
      <div className={styles.draggableIcon}>
        <span className={styles.removeButton} onClick={() => removeItem(item)}>
          ❌
        </span>
        <img draggable="false" src={item.image} alt="" />
      </div>
    </Draggable>
  ) : (
    <div className={styles.icon}>
      <img draggable="false" src={item.image} alt="" />
    </div>
  )
}

export default Icon;
