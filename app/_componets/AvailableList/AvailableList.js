import AvailabkeCard from '../AvailabkeCard/AvailabkeCard';
import style from './availableList.module.scss';
import { getBrandList } from '@/lib/getBrand';

const AvailableList = async () => {
  const list = (await getBrandList()) ?? [];

  return (
    <ul className={style.list}>
      {list.map(brand => {
        return <AvailabkeCard key={brand.id} brand={brand} />;
      })}
    </ul>
  );
};

export default AvailableList;
