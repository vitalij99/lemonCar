import React from 'react';
import Container from '../Container/Container';
import styleTitle from '../Advantage/advantage.module.scss';
import style from './contact.module.scss';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  return (
    <section>
      <Container>
        <h2 className={styleTitle.title_sec}>
          We will contact you in a minute
        </h2>
        <h3 className={style.title}>
          Share your phone number with us sowe can give you a call back
        </h3>
        <ContactForm />
      </Container>
    </section>
  );
};

export default Contact;
