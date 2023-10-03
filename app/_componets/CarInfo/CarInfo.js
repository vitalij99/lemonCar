import style from './carInfo.module.scss';

const TITEL_INFO = [
  'Horsepower',
  'Engine',
  'Acceleration',
  'Type',
  'Drive',
  'Seats',
];

const CarInfo = ({ carData }) => {
  const infoCar = [
    carData.power,
    carData.engine,
    carData.acceleration,
    carData.type,
    carData.drive,
    carData.seats,
  ];

  if (!carData) {
    return <div>Load</div>;
  }
  return (
    <ul className={style.list}>
      {TITEL_INFO.map((title, index) => {
        return (
          <li key={index} className={style.wrapp}>
            <h3 className={style.title}>{title}</h3>
            <h2 className={style.info}>{infoCar[index]}</h2>
          </li>
        );
      })}
    </ul>
  );
};

export default CarInfo;
