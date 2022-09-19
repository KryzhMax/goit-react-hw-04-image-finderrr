import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    const { webformatURL, largeImageURL, tags } = this.props;
    const children = {
      toggleModal: this.toggleModal,
      largeImageURL,
      tags,
    };

    return (
      <>
        <li className={s.ImageGalleryItem} onClick={this.toggleModal}>
          <img
            className={s.ImageGalleryItemImage}
            src={webformatURL}
            alt={tags}
          />
        </li>

        {showModal && <Modal onClose={this.toggleModal}>{children}</Modal>}
      </>
    );
  }
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  children: PropTypes.node,
};
