import React from 'react';
import PropTypes from 'prop-types';
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

ModalContent.propTypes = {
  children: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    toggleModal: PropTypes.func,
  }),
};
