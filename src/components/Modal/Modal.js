import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  static propTypes = {
    onBackdrop: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired
  }

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
    const { src } = this.state;
    return createPortal((
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={src} alt="" />
        </div>
      </div>), modalRoot
    );
  }
}

export default Modal;