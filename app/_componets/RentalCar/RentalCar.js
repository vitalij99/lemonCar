'use client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';

import { useState } from 'react';

const RentalCar = ({ carData }) => {
  const [calendar, setCalendar] = useState(new Date());
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h1>Accordion 1</h1>
        </AccordionSummary>
      </Accordion>
    </Box>
  );
};

export default RentalCar;
