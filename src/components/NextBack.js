import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import leftArrow from '../assets/arrow-left.svg';
import rightArrow from '../assets/arrow-right.svg';
import Scrolltop from '../components/Scrolltop';



class NextBack extends React.Component {
  render() {
    return <div className="container columns is-flex pt-6 pb-6 is-centered">
      <div className="column is-three-fifths pb-6 ">
        <div className="columns">
          <div className="column is-half link-container is-uppercase">
            <div className="is-size-5 has-text-weight-bold is-flex">
                <img className="pr-3 image is-32x32" src={leftArrow} />
                <Scrolltop>
                <Link to={this.props.backurl}>Last Project</Link>
                </Scrolltop>
            </div>
          </div>
          <div className="column is-half link-container is-uppercase is-justify-content-flex-end">
            <div className="is-size-5 has-text-weight-bold is-flex">
              <Scrolltop>
              <Link to={this.props.nexturl}>Next Project</Link>
              </Scrolltop>
              <img className="pl-3 image is-32x32" src={rightArrow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default NextBack;
