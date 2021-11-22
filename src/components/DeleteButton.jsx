import styles from './DeleteButton.module.css'

const DeleteButton = ({ clearStorage }) => {
  return (
    <div onClick={clearStorage} className={styles.delete}>🗑</div>
  )
}

export default DeleteButton