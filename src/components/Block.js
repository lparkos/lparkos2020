import React, {useEffect, useState} from 'react';

class Block extends React.Component {
  render() {
    return <div class="container">
              <div className="columns is-centered pt-6">
                <div className="column is-three-fifths">
                  <h1 className="is-size-4 has-text-weight-bold">{this.props.subhead}</h1>
                  <p className="is-size-5">{this.props.subtext}</p>
                </div>
              </div>
    </div>
  }
}

export default Block;
