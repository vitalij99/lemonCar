'use client';
import { Box, Button, Modal } from '@mui/material';
import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import style from './FormCar.module.scss';

const FormCar = ({ form, calendar }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleOpen = () => setOpenModal(true);
  return (
    <div>
      <Button onClick={handleOpen}>Rental Car</Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={style.wrapp}>
          <ContactForm
            handleClose={handleClose}
            carForm={{ ...form, ...calendar }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default FormCar;
