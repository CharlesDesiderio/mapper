import styles from './DeleteButton.module.css'

const DeleteButton = (props) => {
  return (
    <div onClick={props.clearStorage} className={styles.delete}>🗑</div>
  )
}

export default DeleteButton