import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'; //alternativa para o reset pelo css
import './index.css';
// import Botao from 'Components/Botao/Bota';
// import Footer from 'Components/Footer';
// import ToDoList from 'Components/ToDoList';
import Router from './routes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router /> 
    {/* //componentes criados em exercício na aula, mas não utilizados */}
    {/* <ToDoList />
    <Botao></Botao> 
    <Footer/>  */}
  </React.StrictMode>
);
