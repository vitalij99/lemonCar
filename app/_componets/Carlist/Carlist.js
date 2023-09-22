import CarCard from '../CarCard/CarCard';
import Loading from '../Loading/Loading';
import style from './carlist.module.scss';
import { getCarList } from '@/lib/carList';

const Carlist = async ({ repo }) => {
  let list = [];
  if (repo) {
    list = repo;
  } else list = (await getCarList()) ?? [];

  return (
    <>
      {list ? (
        <ul className={style.list}>
          {list?.map((car, i) => (
            <li key={i}>
              <CarCard car={car} />
            </li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Carlist;
