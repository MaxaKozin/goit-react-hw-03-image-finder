import React, { Component } from 'react';
import styles from './Button.module.css';

class Button extends Component {
  state = {}

  render() {
    return (
      <button type="button" onClick={this.props.onPress} className={styles.Button} > {this.props.name}</button>);
  }
}

export default Button;