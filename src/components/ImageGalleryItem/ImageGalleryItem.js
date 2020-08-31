import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  static propTypes = {
    onItemClick: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  modalContent = (id) => {
    this.props.onItemClick(id);
  }
  render() {
    const { data } = this.props;
    return (
      <>
        {data && data.map(({ id, webformatURL }) => (
          <li key={id} className={s.ImageGalleryItem}>
            <img src={webformatURL} alt="" className={s.ImageGalleryItem_image} onClick={() => this.modalContent(id)} />
          </li>)
        )
        }
      </>
    );
  }
}

export default ImageGalleryItem;