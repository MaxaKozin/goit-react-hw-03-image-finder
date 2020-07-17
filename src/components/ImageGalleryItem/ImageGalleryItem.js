import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  static propTypes = {
    onItemClick: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  modalContent = (id) => {
    this.props.onItemClick(id);
  }
  render() {
    const data = this.props.data;
    return (
      <>
        {data && data.map(item => (
          <li key={item.id} className={styles.ImageGalleryItem}>
            <img src={item.webformatURL} alt="" className={styles.ImageGalleryItem_image} onClick={() => this.modalContent(item.id)} />
          </li>)
        )
        }
      </>
    );
  }
}

export default ImageGalleryItem;