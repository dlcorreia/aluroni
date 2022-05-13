import Footer from 'Components/Footer';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Botao from './Components/Botao/Bota';
import './index.css';
import Cardapio from './pages/Cardapio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cardapio />
    {/* //componentes criados em exercício na aula, mas não utilizados */}
    <Botao></Botao> 
    <Footer/> 
  </React.StrictMode>
);
