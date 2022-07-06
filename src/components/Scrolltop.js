import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


class Scrolltop extends React.Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }
  
    render() {
      return this.props.children
    }
  }
  
  export default Scrolltop;
