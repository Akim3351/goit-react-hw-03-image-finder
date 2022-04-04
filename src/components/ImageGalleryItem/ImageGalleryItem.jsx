import React from "react";
import css from "./ImageGalleryItem.module.css";
import propTypes from "prop-types";

const ImageGalleryItem = ({ hit, onModalOpen }) => {
  return (
    <li className={css.gallery__item}>
      <img
        onClick={onModalOpen}
        data-large={hit.largeImageURL}
        src={hit.previewURL}
        alt={hit.tags}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  onModalOpen: propTypes.func.isRequired,
  hit: propTypes.shape({
    previewURL: propTypes.string.isRequired,
    tags: propTypes.string.isRequired,
  }),
};

export default ImageGalleryItem;
