import styles from './addListForm.module.css'

const AddListForm = ({ text, handleText, handleAddList }) => {
  return (
    <div className={styles.addList}>
      {/* <button className={styles.button}> Hide </button> */}
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={handleText}
      />
      <button className={styles.button} onClick={handleAddList}>
        Add
      </button>
    </div>
  )
}

export default AddListForm
