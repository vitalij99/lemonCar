import CarCard from '../CarCard/CarCard';
import Loading from '../Loading/Loading';
import style from './carlist.module.scss';

const Carlist = async ({ list }) => {
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
