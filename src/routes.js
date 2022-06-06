import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';
import Menu from 'Components/Menu';
import PaginaPadrao from 'Components/PaginaPadrao';

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="/cardapio" element={<Cardapio />} />
        </Route>
      </Routes>
    </Router>

  );
}