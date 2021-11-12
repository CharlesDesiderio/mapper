import styles from './GameMap.module.css'

import worldMap from '../images/map.png'

const GameMap = () => {
  return (
    <div className={styles.gameMap}>
      <img src={worldMap} alt="Map" />
    </div>
  )
}

export default GameMap