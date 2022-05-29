import styles from 'Components/ToDoList/ToDoList.module.scss';


export default function ToDoList() {
  return (
    <div className={styles.todo}>
      <ul>

        <li className={styles.item}>Lembrar de comitar!</li>
        <li className={styles.item}>Lembrar fazer o merge da branch!</li>

      </ul>
    </div>

  );
}