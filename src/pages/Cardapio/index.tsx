import {ReactComponent as Logo} from "assets/logo.svg";
import styles from "./Cardapio.module.scss";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros"
import Ordenador from "./Ordenador";
import Itens from "./Itens";


export default function Cardapio() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState("");

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
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>
                    Cardápio
                </h3>
                <Buscador
                    busca={busca}
                    setBusca={setBusca}
                    />
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
            </section>
        </main>
    )
}

//arquivos estáticos precisam ser importados para funcionarem
//<img src="../../assets/logo.svg"> não funciona por isso