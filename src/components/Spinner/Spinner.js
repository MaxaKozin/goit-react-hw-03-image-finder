import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import s from './Spinner.module.css';

class Spinner extends Component {
  static defaultProps = {
    isEnable: false
  }
  static propTypes = {
    isEnable: PropTypes.bool
  }

  render() {
    const { isEnable } = this.props;
    return (
      <div className={s.Spinner}>
        {isEnable && <Loader
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