import React, { Component } from "react";
import PropTypes from "prop-types";

import s from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  static propTypes = {
    onItemClick: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  modalContent = (id) => {
    this.props.onItemClick(id);
  };
  render() {
    const { id, webformatURL } = this.props;
    return (
      <img
        src={webformatURL}
        alt=""
        className={s.ImageGalleryItem_image}
        onClick={() => this.modalContent(id)}
      />
    );
  }
}

export default ImageGalleryItem;
