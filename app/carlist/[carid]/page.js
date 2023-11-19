import RentalCar from '@/app/_componets/RentalCar/RentalCar';
import { getCarByID } from '@/lib/carList';
import BreadcrumbsCustl from '@/app/_componets/Breadcrumbs/Breadcrumbs';
import IconSwiper from '@/app/_componets/IconSwiper/IconSwiper';
import Container from '@/app/_componets/Container/Container';

import styleTitle from '@/app/styles/carlist.module.scss';
import style from '@/app/styles/carpage.module.scss';
import CarInfo from '@/app/_componets/CarInfo/CarInfo';
import Advantage from '@/app/_componets/Advantage/Advantage';
import Reviews from '@/app/_componets/Reviews/Reviews';

const Car = async ({ params }) => {
  const carData = await getCarByID(params.carid);

  if (!carData) {
    return <div>Not Found</div>;
  }

  return (
    <>
      <section className={style.section}>
        <Container>
          <BreadcrumbsCustl carName={carData.name} />
          <h1 className={styleTitle.title}>{carData.name}</h1>
          <div className={style.wrapp}>
            <IconSwiper images={carData.image} />
            <div>
              <RentalCar carData={carData} />
              <CarInfo carData={carData} />
            </div>
          </div>
        </Container>
      </section>
      <Advantage
        title={'WHY CHOOSE US'}
        titleSec={`Why you should rent ${carData.name}`}
      />
      <Reviews />
    </>
  );
};

export default Car;
