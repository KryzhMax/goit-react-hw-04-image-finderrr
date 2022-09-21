import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const children = {
    toggleModal: toggleModal,
    largeImageURL,
    tags,
  };

  return (
    <>
      <li className={s.ImageGalleryItem} onClick={toggleModal}>
        <img
          className={s.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
        />
      </li>

      {showModal && <Modal onClose={toggleModal}>{children}</Modal>}
    </>
  );
};
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  children: PropTypes.node,
};
