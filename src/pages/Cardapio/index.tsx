
import styles from './Cardapio.module.scss';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';
import Ordenador from './Ordenador';
import Itens from './Itens';
import Crescente from './Crescente';
import stylesTema from 'styles/Tema.module.scss';

export default function Cardapio() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');
  const [ordem, setOrdem] = useState(true);

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>
        Cardápio
      </h3>
      <Buscador
        busca={busca}
        setBusca={setBusca}
      />
      <div className={styles.cardapio__filtros}>
        <div>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
        </div>
        <div className={styles.cardapio__filtros__ordenadores}>
          <div className={styles.teste}>
            <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
          </div>
          <div className={styles.teste}>
            <Crescente ordem={ordem} setOrdem={setOrdem} />
          </div>
        </div>
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} ordem={ordem} />
    </section>
  );
}

//arquivos estáticos precisam ser importados para funcionarem
//<img src="../../assets/logo.svg"> não funciona por isso