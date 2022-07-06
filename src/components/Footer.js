import React, {useEffect, useState} from 'react';
import styles from '../styles/Footer.module.css';

class Footer extends React.Component {
  render() {
    return <div class="container footer-custom">
      <div className="link-container">
        <a target="_blank" href=""></a>
        <a href="https://www.linkedin.com/in/laurenparkos/">Find me on LinkedIn</a>
        <a href=""></a>
      </div>
    </div>
  }
}

export default Footer;
