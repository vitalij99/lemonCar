'use client';

import { useEffect, useState } from 'react';

import style from './contactForm.module.scss';
import axios from 'axios';

const ContactForm = ({ carForm }) => {
  const [comment, setComment] = useState('');
  const [vipTransfer, setVipTransfer] = useState(null);
  const [openTransfer, setOpenTransfer] = useState(false);

  useEffect(() => {
    axios('/api/viptransfer').then(({ data }) => setVipTransfer(data));
  }, []);

  const onSubmit = async event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const phone = formData.get('phone');
    const comment = formData.get('comment');
    const transferId = formData.get('transferId');

    await axios.post('/api/formsubmit', {
      phone,
      comment,
      transferId,
      ...carForm,
    });
  };

  const handleComment = event => {
    setComment(event.target.value.replace(/^\s+/, ''));
  };
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        placeholder="Phone +555..."
        type="tel"
        name="phone"
        pattern="^\+\d+$"
        required={true}
      />

      <textarea
        placeholder="Comment"
        type="text"
        name="comment"
        required={true}
        value={comment}
        onChange={handleComment}
      />
      <div className={style.wrapp}>
        <h3 className={style.text}>Choose a driver</h3>
        <input
          className={style.checkbox}
          type="checkbox"
          name="openTransfer"
          onChange={() => {
            setOpenTransfer(!openTransfer);
          }}
        />
      </div>
      {vipTransfer && openTransfer && (
        <select name="transferId">
          {vipTransfer.map(transfer => (
            <option key={transfer.id} value={transfer.id}>
              {transfer.name}
            </option>
          ))}
        </select>
      )}

      <button className={style.btn} type="submit">
        {carForm ? 'RENTAL CAR' : 'Contact Us'}
      </button>
    </form>
  );
};

export default ContactForm;
