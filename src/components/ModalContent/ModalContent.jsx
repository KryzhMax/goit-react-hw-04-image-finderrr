import React from 'react';
import s from '../Modal/Modal.module.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const ModalContent = ({ children: { largeImageURL, tags, toggleModal } }) => {
  console.log(largeImageURL);
  return (
    <div className={s.Modal}>
      <img src={largeImageURL} alt={tags} />
      <button onClick={toggleModal}>
        <BsFillPatchCheckFill className={s.close} size="30" />
      </button>
    </div>
  );
};

export default ModalContent;
