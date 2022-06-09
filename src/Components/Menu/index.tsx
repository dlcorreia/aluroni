import {ReactComponent as Logo} from 'assets/logo.svg';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const rotas = [{
    label: 'Início',
    to:'/'
  },{
    label: 'Cardápio',
    to: '/cardapio'
  },{
    label: 'Sobre',
    to: '/sobre'
  }];

  const navigate = useNavigate();

  return (
    <nav className={styles.menu}>
      <button onClick={() => navigate('/')}>
        <Logo />
      </button>
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li className={styles.menu__link} key={index}>
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}