import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class ProjectHero extends React.Component {
  render() {
    return <div class="container pt-6">
        <div className="columns is-centered pt-6">
            <h1 className="column is-three-fifths is-size-1 has-text-weight-bold has-text-centered">{this.props.project}</h1>
        </div>

        <div className="columns is-centered pt-3">
          <p className="column is-three-fifths is-size-5 has-text-centered">{this.props.summary}</p>
        </div>

        <div className="columns is-centered pt-6">
          <figure className="column is-four-fifths image">
              <img src={this.props.image} />
          </figure>
        </div>
    </div>
  }
}

export default ProjectHero;
