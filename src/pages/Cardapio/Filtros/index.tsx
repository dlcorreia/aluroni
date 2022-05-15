import styles from "./Filtros.module.scss";
import filtros from "./Filtros.json";

type IOpcao = typeof filtros[0];

export default function Filtros() {

    function selecionarFiltros(opcao: IOpcao) {

    }

    return (
        <div className={styles.filtros}>
            {filtros.map(opcao => (
                <button 
                    className={styles.filtros__filtro}
                    key={opcao.id}
                    onClick={() => selecionarFiltros(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}