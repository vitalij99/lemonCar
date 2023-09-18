'use client';

import { Button, Card, TextField } from '@mui/material';
import { Formik } from 'formik';

const Form = () => {
  const handleSubmit = value => {
    console.log(value);
  };
  return (
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
            <Button sx={{ m: 'auto' }} type="submit" variant="contained">
              Go
            </Button>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default Form;
