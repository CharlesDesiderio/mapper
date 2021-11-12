import styles from './App.module.css'
import GameMap from './components/GameMap'

const App = () => {
  return (
    <div className={styles.app}>
      <GameMap />
    </div>
  )
}

export default App