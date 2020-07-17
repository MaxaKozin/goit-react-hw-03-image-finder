import React, { Component } from 'react';
import styles from './ImageGallery.module.css';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
  }

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