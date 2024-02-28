'use client';
import { ThemeProvider, createTheme } from '@mui/material';
import { useMemo } from 'react';

const DarkProvider = ({ children }) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
        },
      }),
    []
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DarkProvider;
