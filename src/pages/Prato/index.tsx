import styles from './Prato.module.scss';
import { useLocation } from 'react-router-dom';

export default function Prato() {
  const params = useLocation();
  console.log(params);
  return (
    <div>
      Pratos
    </div>
  );
}
