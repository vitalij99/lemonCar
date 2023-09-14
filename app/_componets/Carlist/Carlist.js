'use client';
import { useEffect, useState } from 'react';
import CarCard from '../CarCard/CarCard';
import Loading from '../Loading/Loading';
import style from './carlist.module.scss';

const data = [
  {
    name: 'McLaren Artura',
    prise: 520,
    seats: 2,
    power: 671,
    engine: 3,
    id: 'asdasdasd',
    image:
      'https://res.cloudinary.com/dizrnyvqx/image/upload/v1693403682/cld-sample-5.jpg',
  },
  {
    name: 'McLaren Artura',
    prise: 1520,
    seats: 22,
    power: 71,
    engine: 43,
    id: 'asdasdassd',
    image:
      'https://res.cloudinary.com/dizrnyvqx/image/upload/v1693403682/cld-sample-5.jpg',
  },
];

const Carlist = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(data);
  }, []);

  return (
    <>
      {list.length > 0 ? (
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
