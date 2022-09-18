import React from 'react';
import s from './Button.module.css';

const Button = ({ title, onClick }) => {
  return (
    <button className={s.Button} title={title} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;
