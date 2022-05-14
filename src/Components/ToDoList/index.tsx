import styles from './ToDoList.module.scss';


export default function ToDoList() {
    return (
        <div className={styles.todo}>
            <ul>
                <li className={styles.item}>criar o header e a div de texto na página Cardápio</li>
                <li className={styles.item}>formatar o css dessa div</li>
                <li className={styles.item}>importar a imagem de fundo</li>
                <li className={styles.item}>utilizar uma variável de SASS para declarar o valor de padding</li>
                <li className={styles.item}>separar as variáveis em um arquivo _variaveis.scss</li>
              </ul>
        </div>

    )
}