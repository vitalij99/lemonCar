import React from 'react';
import Container from '../Container/Container';
import styleTitle from '../Advantage/advantage.module.scss';

import ReviewsList from '../ReviewsList/ReviewsList';

const Reviews = () => {
  return (
    <section>
      <Container>
        <h2 className={styleTitle.title}>REVIEWS</h2>
        <h3 className={styleTitle.title_sec}>What our clients say</h3>
        <ReviewsList />
      </Container>
    </section>
  );
};

export default Reviews;
