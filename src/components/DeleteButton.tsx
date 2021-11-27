import styles from './DeleteButton.module.css'

interface deleteButtonProps {
  clearStorage: () => void
}

const DeleteButton = ({ clearStorage }: deleteButtonProps) => {
  return (
    <div onClick={clearStorage} className={styles.delete}>🗑</div>
  )
}

export default DeleteButton