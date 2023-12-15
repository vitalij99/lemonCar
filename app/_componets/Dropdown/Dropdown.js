'use client';

import style from './Dropdown.module.scss';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ThemeProvider,
  createTheme,
} from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Dropdown = ({ title, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Accordion sx={{ m: '10px' }}>
        <AccordionSummary className={style.title}>{title}</AccordionSummary>

        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
};

export default Dropdown;
