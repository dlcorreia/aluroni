import { useEffect, useState } from 'react';
import Item from './Item';
import cardapio from 'data/cardapio.json';
import styles from './Itens.module.scss';
import { Cardapio } from 'Types/Prato';

interface Props {
    busca: string,
    filtro: number | null,
    ordenador: string,
    ordem: boolean
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio);
  const {busca, filtro, ordenador, ordem} = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if(filtro !== null) return filtro === id;
    return true;
  }

  function ordenaPor(lista: Cardapio, criterio: 'size' | 'serving' | 'price') {
    return lista.sort((a,b) => a[criterio] > b[criterio] ? 1 : -1);
  }

  function reverter(lista: Cardapio, ordem: boolean) {
    return ordem ? lista : lista.reverse();
  }

  function ordenar(lista: Cardapio) {
    switch(ordenador) {
    case 'porcao':
      return ordenaPor(lista, 'size');
    case 'qtd_pessoas':
      return ordenaPor(lista, 'serving');
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
    setLista(reverter(ordenar(novaLista), ordem));
  },[busca, filtro, ordenador, ordem]);


  return (
    <div className={styles.itens}>
      {lista.map(item => (
        <Item 
          key={item.id}
          {...item} 
        />
      ))}
    </div>
  );
}