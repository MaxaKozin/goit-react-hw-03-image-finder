import React, { Component } from "react";
import PropTypes from "prop-types";

import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    onItemClick: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  handleOpenModal = (e) => {
    if (e.target !== e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { data, onItemClick } = this.props;
    return (
      <ul className={s.ImageGallery} onClick={this.handleOpenModal}>
        {data &&
          data.map((data) => (
            <li key={data.id} className={s.ImageGalleryItem}>
              <ImageGalleryItem {...data} onItemClick={onItemClick} />
            </li>
          ))}
      </ul>
    );
  }
}

export default ImageGallery;
