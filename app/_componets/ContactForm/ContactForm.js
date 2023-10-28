'use client';
// import { io as ClientIO } from 'socket.io-client';
import { useState } from 'react';

import style from './contactForm.module.scss';
import axios from 'axios';

const ContactForm = () => {
  const [comment, setComment] = useState('');

  const onSubmit = async event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const phone = formData.get('phone');
    const comment = formData.get('comment');

    // webSocket
    // const socketInstance = new ClientIO(process.env.NEXT_PUBLIC_SITE_URL, {
    //   path: '/api/socket/io',
    //   addTrailingSlash: false,
    // });

    // socketInstance.emit('message', 'new form');

    // setTimeout(() => {
    //   socketInstance.disconnect();
    // }, 3000);

    await axios.post('/api/formsubmit', {
      phone,
      comment,
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
