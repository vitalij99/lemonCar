'use client';
import { useState } from 'react';
import style from './Dropdown.module.scss';

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTagle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={isOpen ? `${style.button} ${style.visible}` : style.button}
        onClick={handleTagle}
      >
        <h3 className={style.title}>{title}</h3>
      </button>

      <div className={isOpen ? `${style.wrapp} ${style.visible}` : style.wrapp}>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
