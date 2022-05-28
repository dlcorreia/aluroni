import { useEffect, useState } from "react";
import Item from "./Item";
import cardapio from "./Itens.json";
import styles from "./Itens.module.scss";

interface Props {
    busca: string,
    filtro: number | null,
    ordenador: string
}

export default function Itens(props: Props) {
    const [lista, setLista] = useState(cardapio);
    const {busca, filtro, ordenador} = props;

    function testaBusca(title: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(title);
    };

    function testaFiltro(id: number) {
        if(filtro !== null) return filtro === id;
        return true;
    };

    function ordenaPor(lista: typeof cardapio, criterio: 'size' | 'serving' | 'price') {
        return lista.sort((a,b) => a[criterio] > b[criterio] ? 1 : -1);
    }

    function ordenar(lista: typeof cardapio) {
        switch(ordenador) {
            case 'porcao':
                return ordenaPor(lista, 'size');
            case 'qtd_pessoas':
                return ordenaPor(lista, 'serving')
            case 'preco':
                return ordenaPor(lista, 'price');
            default:
                return lista;
        }
    }

    function criaLista() {
        return cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
   }

    useEffect(() => {
        const novaLista = criaLista();
        setLista(ordenar(novaLista));
      },[busca, filtro, ordenador])


    return (
        <div className={styles.itens}>
            {lista.map(item => (
                <Item 
                    key={item.id}
                    {...item} 
                />
            ))}
        </div>
    )
}