'use client';

import { useState } from 'react';

import style from './contactForm.module.scss';
import axios from 'axios';

const ContactForm = ({ carForm }) => {
  const [comment, setComment] = useState('');

  const onSubmit = async event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const phone = formData.get('phone');
    const comment = formData.get('comment');

    await axios.post('/api/formsubmit', {
      phone,
      comment,
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

      <button type="submit">{carForm ? 'RENTAL CAR' : 'Contact Us'}</button>
    </form>
  );
};

export default ContactForm;
