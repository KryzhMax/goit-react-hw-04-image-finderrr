import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img className={s.ImageGalleryItemImage} src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
