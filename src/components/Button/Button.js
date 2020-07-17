import React, { Component } from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

class Button extends Component {
  static defaultProps = {
    name: 'Load more'
  }
  static propTypes = {
    name: PropTypes.string,
    onPress: PropTypes.func.isRequired
  }
  render() {
    return (
      <button type="button" onClick={this.props.onPress} className={styles.Button} > {this.props.name}</button>);
  }
}

export default Button;