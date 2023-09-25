'use client';
import { Box } from '@mui/material';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import styled from './RentalCar.module.scss';
import dayjs from 'dayjs';

const RentalCar = ({ carData }) => {
  const [calendar, setCalendar] = useState({
    start: dayjs(),
    end: dayjs(),
  });

  useEffect(() => {
    const diffInDays = calendar.end.diff(calendar.start, 'day');
    console.log(diffInDays);
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
            minDate={dayjs()}
            onChange={newValue => setCalendar({ ...calendar, end: newValue })}
          />
        </LocalizationProvider>
        <div className={styled.text}>
          <p>Price</p> <p>USDT accepted</p>
        </div>
      </div>
      <div>{mackePrise(carData.prise)}</div>
    </Box>
  );
};

export default RentalCar;

function mackePrise(prise) {
  return (
    <ul className={styled.prise}>
      <li>
        <h3 className={styled.prise_days}>1 day</h3>
        <span>
          <h3> -0% </h3> <h3> {prise}</h3>
        </span>
      </li>
      <li>
        <h3 className={styled.prise_days}>1-7 days</h3>
        <span>
          <h3>-20%</h3> <h3>{prise * 0.8}</h3>
        </span>
      </li>
      <li>
        <h3 className={styled.prise_days}>8-14 days</h3>
        <span>
          <h3>-30%</h3> <h3>{prise * 0.7}</h3>
        </span>
      </li>
      <li>
        <h3 className={styled.prise_days}>15-29 days</h3>
        <span>
          <h3>-40%</h3> <h3>{prise * 0.6}</h3>
        </span>
      </li>
      <li>
        <h3 className={styled.prise_days}>30+ days</h3>
        <span>
          <h3>-60%</h3> <h3>{prise * 0.4}</h3>
        </span>
      </li>
    </ul>
  );
}
