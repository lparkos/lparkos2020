import React, {useEffect, useState} from 'react';
import styles from '../styles/Logo.module.css';
import LPlogo from '../assets/lp-logo.svg';

class Logo extends React.Component {
  render() {
    return <div className="logo-container">
      <img src={LPlogo} />
    </div>
  }
}

export default Logo;
