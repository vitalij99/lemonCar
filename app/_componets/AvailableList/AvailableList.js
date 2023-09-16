import AvailabkeCard from '../AvailabkeCard/AvailabkeCard';
import style from './availableList.module.scss';
import { getBrand } from '@/lib/getBrand';

const AvailableList = async () => {
  const list = await getBrand();
  return (
    <ul className={style.list}>
      {list.map(brand => {
        return <AvailabkeCard key={brand.id} brand={brand} />;
      })}
    </ul>
  );
};

export default AvailableList;
