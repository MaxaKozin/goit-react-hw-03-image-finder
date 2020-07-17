import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  state = {
    src: ''
  }
  componentDidMount() {
    this.setState({ src: this.props.content })
  }

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onBackdrop();
    }
  }

  render() {
    return createPortal((
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <img src={this.state.src} alt="" />
        </div>
      </div>), modalRoot
    );
  }
}

export default Modal;