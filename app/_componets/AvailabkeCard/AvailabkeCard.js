import Image from 'next/image';
import Link from 'next/link';

import style from './AvailabkeCard.module.scss';
import arrow from '@/public/images/mdi_arrow-r.svg';

const AvailabkeCard = ({ brand }) => {
  const { id, name, number, logo } = brand;

  return (
    <li className={style.wrapp}>
      <Link href={`/carlist/?search=${id}`}>
        <Image
          className={style.logo}
          src={logo}
          width={138}
          height={49}
          alt="car brand"
        />

        <Image className={style.arrow} src={arrow} alt="link" />

        <h3 className={style.name}>
          {name} <span>{number} cars</span>
        </h3>
      </Link>
    </li>
  );
};

export default AvailabkeCard;
