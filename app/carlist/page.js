import { getCarList } from '@/lib/carList';
import Carlist from '../_componets/Carlist/Carlist';
import Container from '../_componets/Container/Container';
import style from '../styles/carlist.module.scss';

const page = async ({ searchParams }) => {
  const { search: category } = searchParams;
  const listCar = (await getCarList({ category })) ?? [];

  return (
    <section className={style.section}>
      <Container>
        <h1 className={style.title}>Rent a car in Dubai</h1>
        <Carlist list={listCar} />
      </Container>
    </section>
  );
};

export default page;
