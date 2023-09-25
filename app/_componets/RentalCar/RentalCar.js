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

      <Box className={styled.data}>
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
      </Box>
    </Box>
  );
};

export default RentalCar;
