import React from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ hits, callback }) => {
  // console.log(callback);
  return (
    <ul className={s.ImageGallery}>
      {hits.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
