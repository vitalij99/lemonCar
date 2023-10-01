import RentalCar from '@/app/_componets/RentalCar/RentalCar';
import { getCarByID } from '@/lib/carList';
import BreadcrumbsCustl from '@/app/_componets/Breadcrumbs/Breadcrumbs';
import IconSwiper from '@/app/_componets/IconSwiper/IconSwiper';
import Container from '@/app/_componets/Container/Container';

import styleTitle from '../../styles/carlist.module.scss';
import style from '../../styles/carpage.module.scss';

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
        <h3 className={styleTitle.title}>WHY CHOOSE US</h3>
        <h3 className={style.title}>Why you should rent {carData.name}</h3>
      </Container>
    </section>
  );
};

export default Car;
