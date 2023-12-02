import { getCarList } from '@/lib/carList';
import Carlist from '@/app/_componets/Carlist/Carlist';
import Container from '@/app/_componets/Container/Container';
import BrandList from '@/app/_componets/BrandList/BrandList';
import style from '@/app/styles/carlist.module.scss';

const page = async ({ searchParams }) => {
  const { search: category } = searchParams;
  const listCar = (await getCarList({ category })) ?? [];

  return (
    <section className={style.section}>
      <Container>
        <h1 className={style.title}>Rent a car in Dubai</h1>
        <BrandList />
        <Carlist list={listCar} />
      </Container>
    </section>
  );
};

export default page;
