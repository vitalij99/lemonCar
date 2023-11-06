'use client';
import { Box, ThemeProvider, createTheme } from '@mui/material';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import styled from './RentalCar.module.scss';
import dayjs from 'dayjs';
import FormCar from '../FormCar/FormCar';
import { CAR_DEPOSIT, getDiffInDays, procentraPrice } from '@/lib/values';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const RentalCar = ({ carData }) => {
  const price = Number(carData.price);

  const [calendar, setCalendar] = useState({
    dataFirst: dayjs(),
    dataLast: dayjs(),
  });

  const [formCar, setFormCar] = useState({
    totalPrise: price,
    diffInDays: 1,
    deposit: price * CAR_DEPOSIT,
    price,
    carId: carData.id,
  });

  useEffect(() => {
    const diffInDays = getDiffInDays(calendar.dataFirst, calendar.dataLast);

    const totalPrise =
      diffInDays <= 0 ? price : procentraPrice(price, diffInDays) * diffInDays;

    const deposit = Math.floor(totalPrise * CAR_DEPOSIT);
    setFormCar(prev => ({ ...prev, deposit, totalPrise, diffInDays }));
  }, [calendar, price]);

  return (
    <Box
      sx={{
        p: '55px',
        backgroundColor: 'color-mix(in lch, var(--background) 80%, #3d3d3d )',
        border: '1px solid #2F2F2F',
      }}
    >
      <h1>RENTAL CAR</h1>

      <div>
        <div className={styled.data}>
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Start dates"
                value={calendar.dataFirst}
                minDate={dayjs()}
                onChange={newValue =>
                  setCalendar({ ...calendar, dataFirst: newValue })
                }
              />
              <DatePicker
                label="End"
                value={calendar.dataLast}
                minDate={calendar.dataFirst}
                onChange={newValue =>
                  setCalendar({ ...calendar, dataLast: newValue })
                }
              />
            </LocalizationProvider>
          </ThemeProvider>
        </div>
        <div className={styled.text}>
          <p>Price</p> <p>USDT accepted</p>
        </div>
      </div>
      <div>{makePrice(price, formCar.diffInDays + 0.1)}</div>
      <div className={styled.price_all}>
        <span>
          <h3 className={styled.price_all_title}>Deposit</h3>
          <h3>${formCar.deposit}</h3>
        </span>
        <span>
          <h3 className={styled.price_all_title}>{formCar.diffInDays} day </h3>
          <h3>${procentraPrice(price, formCar.diffInDays)}</h3>
        </span>
        <span>
          <h3 className={styled.price_all_title}>Total</h3>
          <h3>${formCar.totalPrise}</h3>
        </span>
      </div>
      <FormCar form={formCar} calendar={calendar} />
    </Box>
  );
};

export default RentalCar;

function makePrice(price, diffInDays) {
  return (
    <ul className={styled.price}>
      <li className={diffInDays < 1 ? styled.days : ''}>
        <h3 className={styled.price_days}>1 day</h3>
        <h3 className={styled.price_percent}>-0%</h3>

        <h3>${procentraPrice(price, 0)}</h3>
      </li>
      <li className={diffInDays >= 1 && diffInDays < 8 ? styled.days : ''}>
        <h3 className={styled.price_days}>1-7 days</h3>
        <h3 className={styled.price_percent}>-20%</h3>

        <h3>${procentraPrice(price, 7)}</h3>
      </li>
      <li className={diffInDays > 7 && diffInDays < 15 ? styled.days : ''}>
        <h3 className={styled.price_days}>8-14 days</h3>
        <h3 className={styled.price_percent}>-30%</h3>

        <h3>${procentraPrice(price, 14)}</h3>
      </li>
      <li className={diffInDays > 14 && diffInDays < 30 ? styled.days : ''}>
        <h3 className={styled.price_days}>15-29 days</h3>
        <h3 className={styled.price_percent}>-40%</h3>

        <h3>${procentraPrice(price, 29)}</h3>
      </li>
      <li className={diffInDays > 29 ? styled.days : ''}>
        <h3 className={styled.price_days}>30+ days</h3>
        <h3 className={styled.price_percent}>-60%</h3>

        <h3>${procentraPrice(price, 30)}</h3>
      </li>
    </ul>
  );
}
