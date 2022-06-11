import styles from './Prato.module.scss';
import { useParams } from 'react-router-dom';

export default function Prato() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      Pratos
    </div>
  );
}
