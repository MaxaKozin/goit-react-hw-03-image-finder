import React, { Component } from 'react';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
  handleOpenModal = (e) => {
    if (e.target !== e.currentTarget) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <ul className={styles.ImageGallery} onClick={this.handleOpenModal}>
        {this.props.children}
      </ul>
    );
  }
}

export default ImageGallery;