import Footer from 'Components/Footer';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'; //alternativa para o reset pelo css
import './index.css';
import Botao from './Components/Botao/Bota';
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
