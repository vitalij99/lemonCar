import Image from 'next/image';
import Link from 'next/link';
import style from './carCard.module.scss';
import LinkCircle from '../LinkCircle/LinkCircle';

const CarCard = ({ car }) => {
  const { name, prise, seats, power, engine, image, id } = car;
  return (
    <Link href={`/carlist/${id}`}>
      <div className={style.wrapp}>
        <Image
          className={style.img}
          src={image}
          alt="car"
          width={345}
          height={230}
        />
        <div className={style.text}>
          <h2 className={style.title}>{name}</h2>
          <div className={style.text_wrapp}>
            <h3>
              {seats} <span className={style.text_style}>Seats</span>
            </h3>
            <h3>
              {power} <span className={style.text_style}>Horse power</span>
            </h3>
            <h3>
              {engine}L <span className={style.text_style}>Engine</span>
            </h3>
          </div>
        </div>

        <div className={style.prise_wrapp}>
          <div>
            <h2 className={style.prise}>
              from <span className={style.prise_style}>${prise}</span> / per day
            </h2>
            <p className={style.text_style}>USDT accepted</p>
          </div>
          <h3 className={style.link}>Rent</h3>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
