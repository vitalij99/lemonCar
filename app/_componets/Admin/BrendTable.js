'use client';

import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const BrendTable = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>sad</ThemeProvider>
    </div>
  );
};

export default BrendTable;
