'use client';

import Image from 'next/image';
import style from './iconSwiper.module.scss';
import { useState } from 'react';
import { Button } from '@mui/material';

const IconSwiper = ({ images }) => {
  const [showImage, setShowImage] = useState(0);

  const handleClickNext = () => {
    if (images.length !== showImage + 1) {
      setShowImage(prev => (prev += 1));
    }
  };
  const handleClickBack = () => {
    if (0 !== showImage) {
      setShowImage(prev => (prev -= 1));
    }
  };
  if (!images) return <div>load</div>;
  return (
    <div className={style.wrapp}>
      <Image
        className={style.image}
        src={images[showImage]}
        alt="car foto"
        width={345}
        height={125}
      />
      <div className={style.button_wrapp}>
        {showImage !== 0 && <Button onClick={handleClickBack}>back</Button>}
        {showImage + 1 !== images.length && (
          <Button onClick={handleClickNext}>next</Button>
        )}
      </div>

      <div className={style.images_wrapp}>
        {images.map((icon, index) => {
          {
            return (
              <Button key={index} onClick={ele => setShowImage(index)}>
                <Image
                  className={style.images}
                  src={icon}
                  alt="car foto"
                  width={100}
                  height={100}
                />
              </Button>
            );
          }
        })}
      </div>
    </div>
  );
};

export default IconSwiper;
