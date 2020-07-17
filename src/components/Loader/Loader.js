import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

class Spinner extends Component {
  render() {
    return (
      <div className={styles.Spinner}>
        {this.props.isEnable && <Loader
          type="Puff"
          color="#00BFFF"
          height={50}
          width={50}

        />}
      </div>
    );
  }
}

export default Spinner;