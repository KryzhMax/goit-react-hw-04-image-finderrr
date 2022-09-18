import React from 'react';
import s from '../Modal/Modal.module.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const ModalContent = ({ children: { largeImageURL, tags, toggleModal } }) => {
  return (
    <div className={s.Modal}>
      <img src={largeImageURL} alt={tags} />
      <BsFillPatchCheckFill
        onClick={toggleModal}
        className={s.close}
        size="30"
      />
    </div>
  );
};

export default ModalContent;
