'use client';

import { Button, Card, TextField } from '@mui/material';
import axios from 'axios';
import { Formik } from 'formik';

const Form = () => {
  const handleSubmit = async value => {
    if (!value) return;
    try {
      const result = await axios.post('/api/admin', value);
      console.log(result);
    } catch (error) {
      return console.log(error.massage);
    }
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
  );
};

export default Form;
