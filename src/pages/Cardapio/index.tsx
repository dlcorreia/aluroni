import styles from "./Cardapio.module.scss";
import {ReactComponent as Logo} from "assets/logo.svg";

export default function Cardapio() {
    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
        </main>
    )
}

//arquivos estáticos precisam ser importados para funcionarem
//<img src="../../assets/logo.svg"> não funciona por isso