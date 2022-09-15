import React from 'react';
import * as basicLightbox from 'basiclightbox';
import s from './Modal.module.css';

const Modal = () => {
  return (
    <div className={s.Overlay}>
      <div className={s.Modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Modal;
