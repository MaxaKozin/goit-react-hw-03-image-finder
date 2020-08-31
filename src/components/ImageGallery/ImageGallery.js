import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ImageGallery.module.css';

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
    const { children } = this.props;
    return (
      <ul className={s.ImageGallery} onClick={this.handleOpenModal}>
        {children}
      </ul>
    );
  }
}

export default ImageGallery;