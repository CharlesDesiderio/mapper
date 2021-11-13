import styles from './Icon.module.css'

const Icon = (props) => {
  return (
    <div className={styles.icon}>
      {props.name}
    </div>
  )
}

export default Icon