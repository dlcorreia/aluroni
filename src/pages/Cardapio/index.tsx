import {ReactComponent as Logo} from "assets/logo.svg";
import styles from "./Cardapio.module.scss";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros"


export default function Cardapio() {
    const [busca, setBusca] = useState("");
    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do codigo e da massa
                </div>
            </header>
            <Buscador
                busca={busca}
                setBusca={setBusca}
            />
            <Filtros />
        </main>
    )
}

//arquivos estáticos precisam ser importados para funcionarem
//<img src="../../assets/logo.svg"> não funciona por isso