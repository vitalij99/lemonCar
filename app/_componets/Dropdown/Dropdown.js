'use client';

import DarkProvider from '../DarkProvider/DarkProvider';
import style from './Dropdown.module.scss';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

const Dropdown = ({ title, children }) => {
  return (
    <DarkProvider>
      <Accordion sx={{ m: '10px' }}>
        <AccordionSummary className={style.title}>{title}</AccordionSummary>

        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </DarkProvider>
  );
};

export default Dropdown;
