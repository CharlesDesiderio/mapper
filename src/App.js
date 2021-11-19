import styles from './App.module.css'
import GameMap from './components/GameMap'

const App = () => {
  return (
    <div className={styles.app}>
      <GameMap />
      <div className={styles.gitLink}><a target="_blank" rel="noreferrer" href="https://github.com/CharlesDesiderio/mapper">GitHub</a></div>
    </div>
  )
}

export default App