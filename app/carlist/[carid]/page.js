import Container from '@/app/_componets/Container/Container';

import style from '../../styles/carlist.module.scss';
import BreadcrumbsCustl from '@/app/_componets/Breadcrumbs/Breadcrumbs';
import { getCarByID } from '@/lib/carList';
import RentalCar from '@/app/_componets/RentalCar/RentalCar';

const Car = async ({ params }) => {
  const carData = await getCarByID(params.carid);

  if (!carData) {
    return <div>Not Found</div>;
  }

  return (
    <section className={style.section}>
      <Container>
        <BreadcrumbsCustl carName={carData.name} />
        <h1 className={style.title}>{carData.name}</h1>
        <RentalCar carData={carData} />
      </Container>
    </section>
  );
};

export default Car;
