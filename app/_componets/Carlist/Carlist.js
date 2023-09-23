import CarCard from '../CarCard/CarCard';
import Container from '../Container/Container';
import Loading from '../Loading/Loading';
import style from './carlist.module.scss';

const Carlist = async ({ list }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default Carlist;
