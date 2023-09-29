import Container from '@/app/_componets/Container/Container';

import styleTitle from '../../styles/carlist.module.scss';
import style from '../../styles/carpage.module.scss';
import BreadcrumbsCustl from '@/app/_componets/Breadcrumbs/Breadcrumbs';
import { getCarByID } from '@/lib/carList';
import RentalCar from '@/app/_componets/RentalCar/RentalCar';

import IconSwiper from '@/app/_componets/IconSwiper/IconSwiper';

const Car = async ({ params }) => {
  const carData = await getCarByID(params.carid);

  if (!carData) {
    return <div>Not Found</div>;
  }

  return (
    <section className={styleTitle.section}>
      <Container>
        <BreadcrumbsCustl carName={carData.name} />
        <h1 className={styleTitle.title}>{carData.name}</h1>
        <div className={style.wrapp}>
          <IconSwiper images={carData.image} />
          <RentalCar carData={carData} />
        </div>
      </Container>
    </section>
  );
};

export default Car;
