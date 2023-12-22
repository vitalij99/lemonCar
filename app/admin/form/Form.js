'use client';

import { Alert, Button, Card, TextField } from '@mui/material';
import axios from 'axios';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Form = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  // password hex
  const handleSubmit = async value => {
    setError(null);
    if (value.login === '' || value.password === '') {
      setError('empty login or password');
      return;
    }
    try {
      const result = await axios.post('/api/admin', value);

      if (result) {
        localStorage.setItem('token', result.data.token);
        router.refresh();
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      {error && (
        <Alert sx={{ m: 10 }} severity="error">
          {error}
        </Alert>
      )}
      <Card sx={{ m: '0 auto', width: 'fit-content' }}>
        <Formik
          initialValues={{
            login: '',
            password: '',
          }}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  id="login"
                  sx={{ m: 1 }}
                  label="login"
                  variant="outlined"
                  value={values.login}
                  onChange={handleChange}
                />
                <TextField
                  sx={{ m: 1 }}
                  id="password"
                  label="password"
                  variant="outlined"
                  value={values.password}
                  onChange={handleChange}
                />
              </div>
              <Button sx={{ m: 1 }} type="submit" variant="contained">
                Go
              </Button>
            </form>
          )}
        </Formik>
      </Card>
    </>
  );
};

export default Form;
