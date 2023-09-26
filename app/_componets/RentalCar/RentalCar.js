'use client';
import { Box } from '@mui/material';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import styled from './RentalCar.module.scss';
import dayjs from 'dayjs';

const procentraPrice = (price, day) => {
  const discounts = {
    0: 1.0,
    7: 0.8,
    14: 0.7,
    29: 0.6,
    30: 0.4,
  };

  const discount =
    discounts[Math.min(day, Math.max(...Object.keys(discounts)))];

  return price * discount;
};

const RentalCar = ({ carData }) => {
  const [calendar, setCalendar] = useState({ start: dayjs(), end: dayjs() });
  const [diffInDays, setDiffInDays] = useState(0);
  const { price } = carData;

  useEffect(() => {
    const diffEnd = calendar.end.diff(calendar.start, 'day');
    console.log(diffEnd);
    setDiffInDays(Number(diffEnd));
  }, [calendar]);

  return (
    <Box
      sx={{
        p: '55px',
        backgroundColor: 'color-mix(in lch, var(--background) 80%, #3d3d3d )',
        border: '1px solid #2F2F2F',
      }}
    >
      <h1>RENTAL CAR</h1>

      <div className={styled.data}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start dates"
            value={calendar.start}
            minDate={dayjs()}
            onChange={newValue => setCalendar({ ...calendar, start: newValue })}
          />
          <DatePicker
            label="End"
            value={calendar.end}
            minDate={calendar.start}
            onChange={newValue => setCalendar({ ...calendar, end: newValue })}
          />
        </LocalizationProvider>
        <div className={styled.text}>
          <p>Price</p> <p>USDT accepted</p>
        </div>
      </div>
      <div>{makePrice(price, diffInDays)}</div>
      <div className={styled.price_all}>
        <span>
          <h3>Deposit</h3>
          <h3>{diffInDays} day </h3>
          <h3>Total</h3>
        </span>
        <span>
          <h3>{}</h3>
          <h3>{procentraPrice(price, diffInDays)}</h3>
          <h3>{procentraPrice(price, diffInDays)}</h3>
        </span>
      </div>
    </Box>
  );
};

export default RentalCar;

function makePrice(price, diffInDays) {
  return (
    <ul className={styled.price}>
      <li className={diffInDays < 1 ? styled.days : ''}>
        <span>
          <h3>1 day</h3>
          <h3> -0% </h3>
        </span>
        <h3>${procentraPrice(price, 0)}</h3>
      </li>
      <li className={diffInDays > 0 && diffInDays < 8 ? styled.days : ''}>
        <span>
          <h3>1-7 days</h3>
          <h3>-20%</h3>
        </span>
        <h3>${procentraPrice(price, 7)}</h3>
      </li>
      <li className={diffInDays > 7 && diffInDays < 15 ? styled.days : ''}>
        <span>
          <h3>8-14 days</h3>
          <h3>-30%</h3>
        </span>
        <h3>${procentraPrice(price, 14)}</h3>
      </li>
      <li className={diffInDays > 14 && diffInDays < 30 ? styled.days : ''}>
        <span>
          <h3>15-29 days</h3>
          <h3>-40%</h3>
        </span>
        <h3>${procentraPrice(price, 29)}</h3>
      </li>
      <li className={diffInDays > 29 ? styled.days : ''}>
        <span>
          <h3>30+ days</h3>
          <h3>-60%</h3>
        </span>
        <h3>${procentraPrice(price, 30)}</h3>
      </li>
    </ul>
  );
}
