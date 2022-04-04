import React from "react";
import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import propTypes from "prop-types";

const ImageGallery = ({ onModalOpen, hits }) => {
  return (
    <ul className={css.gallery}>
      {hits.map((hit) => {
        return (
          <ImageGalleryItem hit={hit} key={hit.id} onModalOpen={onModalOpen} />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  hits: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      previewURL: propTypes.string.isRequired,
      tags: propTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
