import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ hits }) => {
  console.log(hits);
  return (
    <ul className={s.ImageGallery}>
      {hits.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem id={id} webformatURL={webformatURL} tags={tags} />
      ))}
    </ul>
  );
};

export default ImageGallery;
