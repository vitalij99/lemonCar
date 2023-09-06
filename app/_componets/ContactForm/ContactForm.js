'use client';

import { useState } from 'react';
import Container from '../Container/Container';
import style from './contactForm.module.scss';

const ContactForm = () => {
  const [comment, setComment] = useState('');

  const onSubmit = async event => {
    event.preventDefault();

    const formData = new FormData(event.target);

    await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    });
  };
  const handleComment = event => {
    setComment(event.target.value.replace(/^\s+/, ''));
  };
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        placeholder="Phone"
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

      <button type="submit">Contact Us</button>
    </form>
  );
};

export default ContactForm;
