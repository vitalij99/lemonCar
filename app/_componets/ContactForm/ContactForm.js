'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

import style from './contactForm.module.scss';
import { Formik } from 'formik';
import {
  Button,
  MenuItem,
  Skeleton,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material';
const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const INITIAL_VALUES = {
  phone: '',
  comment: '',
  transferId: [],
};
const ContactForm = ({ carForm }) => {
  const [vipTransfer, setVipTransfer] = useState(null);
  const [openTransfer, setOpenTransfer] = useState(false);

  useEffect(() => {
    axios('/api/viptransfer').then(({ data }) => setVipTransfer(data));
  }, []);

  const handleSubmit = async (values, actions) => {
    if (!openTransfer && values.transferId) {
      delete values.transferId;
    }

    await axios.post('/api/formsubmit', result);
    actions.resetForm();
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {vipTransfer ? (
          <Formik
            initialValues={{ ...INITIAL_VALUES, transferId: vipTransfer[0].id }}
            validate={values => {
              const errors = {};
              if (!values.phone) {
                errors.phone = true;
              } else if (!/\+\d+$/.test(values.phone)) {
                errors.phone = true;
              }
              return errors;
            }}
            onSubmit={(values, actions) => {
              handleSubmit(values, actions);
            }}
          >
            {({ values, handleChange, handleSubmit, errors }) => (
              <form className={style.form} onSubmit={handleSubmit}>
                <TextField
                  sx={{ width: '100%', marginBottom: '10px' }}
                  name="phone"
                  type="tel"
                  placeholder="+555..."
                  required={true}
                  className={style.phone}
                  label="Phone"
                  variant="outlined"
                  value={values.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />

                <TextField
                  sx={{ width: '100%', marginBottom: '10px' }}
                  name="comment"
                  label="Comment"
                  placeholder="Comment"
                  value={values.comment}
                  onChange={handleChange}
                />
                <div className={style.wrapp}>
                  <h3>Choose a driver</h3>
                  <label className={style.checkbox} name="openTransfer">
                    <input
                      type="checkbox"
                      name="openTransfer"
                      onChange={() => {
                        setOpenTransfer(!openTransfer);
                      }}
                    />
                  </label>
                </div>
                {vipTransfer && openTransfer && (
                  <TextField
                    sx={{ width: '100%', marginTop: '10px' }}
                    onChange={handleChange}
                    name="transferId"
                    value={values.transferId}
                    select
                    label="Choose a driver"
                  >
                    {vipTransfer.map(transfer => (
                      <MenuItem key={transfer.id} value={transfer.id}>
                        {transfer.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}

                <Button
                  disabled={errors.phone}
                  className={style.btn}
                  type="submit"
                >
                  {carForm ? 'RENTAL CAR' : 'Contact Us'}
                </Button>
              </form>
            )}
          </Formik>
        ) : (
          <Skeleton width={375} height={250} />
        )}
      </ThemeProvider>
    </>
  );
};

export default ContactForm;
